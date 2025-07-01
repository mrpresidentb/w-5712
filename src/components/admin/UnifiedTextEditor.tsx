
import React, { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContentSection } from '@/types/supabase-blog';
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
          const listItems = section.items?.join('\n• ') || '';
          return `[LIST]\n• ${listItems}[/LIST]`;
        default:
          return section.content || '';
      }
    }).join('\n\n');
  }, []);

  // Parse unified text back to ContentSection[]
  const textToContent = useCallback((text: string): ContentSection[] => {
    const sections: ContentSection[] = [];
    const lines = text.split('\n');
    let currentSection: ContentSection | null = null;
    let buffer = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check for opening tags
      if (line.includes('[HEADING]')) {
        if (buffer.trim()) {
          sections.push({ type: 'paragraph', content: buffer.trim() });
          buffer = '';
        }
        const content = line.replace('[HEADING]', '').replace('[/HEADING]', '');
        sections.push({ type: 'heading', content });
        continue;
      }
      
      if (line.includes('[SUBHEADING]')) {
        if (buffer.trim()) {
          sections.push({ type: 'paragraph', content: buffer.trim() });
          buffer = '';
        }
        const content = line.replace('[SUBHEADING]', '').replace('[/SUBHEADING]', '');
        sections.push({ type: 'subheading', content });
        continue;
      }
      
      if (line.includes('[QUOTE]')) {
        if (buffer.trim()) {
          sections.push({ type: 'paragraph', content: buffer.trim() });
          buffer = '';
        }
        const content = line.replace('[QUOTE]', '').replace('[/QUOTE]', '');
        sections.push({ type: 'quote', content });
        continue;
      }
      
      if (line.includes('[LIST]')) {
        if (buffer.trim()) {
          sections.push({ type: 'paragraph', content: buffer.trim() });
          buffer = '';
        }
        currentSection = { type: 'list', items: [] };
        continue;
      }
      
      if (line.includes('[/LIST]')) {
        if (currentSection && currentSection.type === 'list') {
          sections.push(currentSection);
          currentSection = null;
        }
        continue;
      }
      
      // Handle list items
      if (currentSection && currentSection.type === 'list' && line.startsWith('•')) {
        const item = line.substring(1).trim();
        if (item) {
          currentSection.items = currentSection.items || [];
          currentSection.items.push(item);
        }
        continue;
      }
      
      // Regular paragraph content
      if (currentSection && currentSection.type === 'list') {
        // We're in a list but this isn't a list item, end the list
        sections.push(currentSection);
        currentSection = null;
        buffer = line;
      } else {
        buffer += (buffer ? '\n' : '') + line;
      }
    }
    
    // Handle remaining buffer
    if (buffer.trim()) {
      sections.push({ type: 'paragraph', content: buffer.trim() });
    }
    
    if (currentSection) {
      sections.push(currentSection);
    }
    
    return sections.filter(section => 
      section.content?.trim() || (section.items && section.items.length > 0)
    );
  }, []);

  const [textValue, setTextValue] = useState(() => contentToText(content));

  const insertMarkup = useCallback((startTag: string, endTag: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textValue.substring(start, end);
    
    if (selectedText) {
      // Wrap selected text
      const newValue = 
        textValue.substring(0, start) + 
        startTag + selectedText + endTag + 
        textValue.substring(end);
      
      setTextValue(newValue);
      
      // Update content
      const newContent = textToContent(newValue);
      onChange(newContent);
      
      // Restore cursor position
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(
          start + startTag.length, 
          end + startTag.length
        );
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
              <li>• Use <code>[LIST]</code> with bullet points <code>• item</code> then <code>[/LIST]</code></li>
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
