
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ContentSection } from '../../types/supabase-blog';
import { Bold, Italic, List, Quote, Type, Heading } from 'lucide-react';

interface UnifiedTextEditorProps {
  content: ContentSection[];
  onChange: (content: ContentSection[]) => void;
  placeholder?: string;
}

const UnifiedTextEditor: React.FC<UnifiedTextEditorProps> = ({
  content,
  onChange,
  placeholder = "Start writing your content..."
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Convert ContentSection[] to unified text format
  const contentToText = useCallback((sections: ContentSection[]): string => {
    return sections.map(section => {
      switch (section.type) {
        case 'heading':
          return `[HEADING]${section.content || ''}[/HEADING]`;
        case 'subheading':
          return `[SUBHEADING]${section.content || ''}[/SUBHEADING]`;
        case 'paragraph':
          return section.content || '';
        case 'quote':
          return `[QUOTE]${section.content || ''}[/QUOTE]`;
        case 'list':
          const listItems = section.items?.join('\n') || '';
          return `[LIST]\n${listItems}\n[/LIST]`;
        default:
          return section.content || '';
      }
    }).join('\n\n');
  }, []);

  // Parse unified text back to ContentSection[]
  const textToContent = useCallback((text: string): ContentSection[] => {
    const sections: ContentSection[] = [];
    let remainingText = text;
    
    // Process the text sequentially to handle all formatting
    while (remainingText.length > 0) {
      let foundMatch = false;
      
      // Check for HEADING
      const headingMatch = remainingText.match(/\[HEADING\](.*?)\[\/HEADING\]/s);
      if (headingMatch && remainingText.indexOf(headingMatch[0]) === 0) {
        sections.push({ type: 'heading', content: headingMatch[1].trim() });
        remainingText = remainingText.substring(headingMatch[0].length);
        foundMatch = true;
        continue;
      }
      
      // Check for SUBHEADING
      const subheadingMatch = remainingText.match(/\[SUBHEADING\](.*?)\[\/SUBHEADING\]/s);
      if (subheadingMatch && remainingText.indexOf(subheadingMatch[0]) === 0) {
        sections.push({ type: 'subheading', content: subheadingMatch[1].trim() });
        remainingText = remainingText.substring(subheadingMatch[0].length);
        foundMatch = true;
        continue;
      }
      
      // Check for QUOTE
      const quoteMatch = remainingText.match(/\[QUOTE\](.*?)\[\/QUOTE\]/s);
      if (quoteMatch && remainingText.indexOf(quoteMatch[0]) === 0) {
        sections.push({ type: 'quote', content: quoteMatch[1].trim() });
        remainingText = remainingText.substring(quoteMatch[0].length);
        foundMatch = true;
        continue;
      }
      
      // Check for LIST
      const listMatch = remainingText.match(/\[LIST\](.*?)\[\/LIST\]/s);
      if (listMatch && remainingText.indexOf(listMatch[0]) === 0) {
        const listContent = listMatch[1].trim();
        const items = listContent
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0)
          .map(line => line.replace(/^•\s*/, '')); // Remove bullet points if present
        
        if (items.length > 0) {
          sections.push({ type: 'list', items });
        }
        remainingText = remainingText.substring(listMatch[0].length);
        foundMatch = true;
        continue;
      }
      
      if (!foundMatch) {
        // Find the next tag or use the rest of the text
        const nextTagMatch = remainingText.match(/\[(HEADING|SUBHEADING|QUOTE|LIST)\]/);
        let textToAdd: string;
        
        if (nextTagMatch) {
          textToAdd = remainingText.substring(0, nextTagMatch.index);
          remainingText = remainingText.substring(nextTagMatch.index || 0);
        } else {
          textToAdd = remainingText;
          remainingText = '';
        }
        
        // Add as paragraph if there's content
        const paragraphContent = textToAdd.trim();
        if (paragraphContent) {
          sections.push({ type: 'paragraph', content: paragraphContent });
        }
      }
      
      // Skip empty lines between sections
      remainingText = remainingText.replace(/^\s*\n+/, '');
    }
    
    return sections.filter(section => 
      section.content?.trim() || (section.items && section.items.length > 0)
    );
  }, []);

  // Initialize textValue from content prop and update when content changes
  const [textValue, setTextValue] = useState(() => contentToText(content));

  // Update textValue when content prop changes (e.g., when loading an existing article)
  useEffect(() => {
    const newTextValue = contentToText(content);
    setTextValue(newTextValue);
  }, [content, contentToText]);

  const insertMarkup = useCallback((startTag: string, endTag: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textValue.substring(start, end);
    
    if (selectedText) {
      let newValue: string;
      
      // Special handling for LIST - convert each line to a list item
      if (startTag === '[LIST]\n• ' && endTag === '\n[/LIST]') {
        const lines = selectedText
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0);
        
        const listItems = lines.join('\n');
        newValue = 
          textValue.substring(0, start) + 
          '[LIST]\n' + listItems + '\n[/LIST]' + 
          textValue.substring(end);
      } else {
        // Regular wrapping for other tags
        newValue = 
          textValue.substring(0, start) + 
          startTag + selectedText + endTag + 
          textValue.substring(end);
      }
      
      setTextValue(newValue);
      
      // Update content
      const newContent = textToContent(newValue);
      onChange(newContent);
      
      // Restore cursor position
      setTimeout(() => {
        textarea.focus();
        const newCursorPos = startTag === '[LIST]\n• ' && endTag === '\n[/LIST]' 
          ? start + newValue.substring(start).indexOf('[/LIST]') + 7
          : start + startTag.length;
        textarea.setSelectionRange(newCursorPos, newCursorPos);
      }, 0);
    } else {
      // Insert at cursor position
      const newValue = 
        textValue.substring(0, start) + 
        startTag + endTag + 
        textValue.substring(end);
      
      setTextValue(newValue);
      
      // Update content
      const newContent = textToContent(newValue);
      onChange(newContent);
      
      // Position cursor between tags
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(
          start + startTag.length, 
          start + startTag.length
        );
      }, 0);
    }
  }, [textValue, onChange, textToContent]);

  const handleTextChange = (value: string) => {
    setTextValue(value);
    const newContent = textToContent(value);
    onChange(newContent);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Content Editor</span>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => insertMarkup('[HEADING]', '[/HEADING]')}
              title="Apply Heading"
            >
              <Heading className="w-4 h-4 mr-1" />
              Heading
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => insertMarkup('[SUBHEADING]', '[/SUBHEADING]')}
              title="Apply Subheading"
            >
              <Heading className="w-3 h-3 mr-1" />
              Subheading
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => insertMarkup('[QUOTE]', '[/QUOTE]')}
              title="Apply Quote"
            >
              <Quote className="w-4 h-4 mr-1" />
              Quote
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => insertMarkup('[LIST]\n• ', '\n[/LIST]')}
              title="Create List"
            >
              <List className="w-4 h-4 mr-1" />
              List
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
            <p className="font-medium mb-2">How to use:</p>
            <ul className="space-y-1 text-xs">
              <li>• Select text and click formatting buttons to apply styles</li>
              <li>• Use <code>[HEADING]text[/HEADING]</code> for headings</li>
              <li>• Use <code>[SUBHEADING]text[/SUBHEADING]</code> for subheadings</li>
              <li>• Use <code>[QUOTE]text[/QUOTE]</code> for quotes</li>
              <li>• Use <code>[LIST]</code> with items on separate lines then <code>[/LIST]</code></li>
              <li>• Regular text becomes paragraphs automatically</li>
            </ul>
          </div>
          
          <Textarea
            ref={textareaRef}
            value={textValue}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder={placeholder}
            className="min-h-[400px] font-mono text-sm"
          />
          
          <div className="text-xs text-gray-500">
            Content sections detected: {content.length}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnifiedTextEditor;
