
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ContentSection } from '@/types/supabase-blog';
import { Bold, Italic, List, Quote, Type, Heading, Plus, Trash2 } from 'lucide-react';

interface RichTextEditorProps {
  content: ContentSection[];
  onChange: (content: ContentSection[]) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onChange,
  placeholder = "Start writing your content..."
}) => {
  const addSection = useCallback((type: ContentSection['type']) => {
    const newSection: ContentSection = {
      type,
      content: type === 'list' ? undefined : '',
      items: type === 'list' ? [''] : undefined
    };
    onChange([...content, newSection]);
  }, [content, onChange]);

  const updateSection = useCallback((index: number, updates: Partial<ContentSection>) => {
    const newContent = [...content];
    newContent[index] = { ...newContent[index], ...updates };
    onChange(newContent);
  }, [content, onChange]);

  const removeSection = useCallback((index: number) => {
    const newContent = content.filter((_, i) => i !== index);
    onChange(newContent);
  }, [content, onChange]);

  const addListItem = useCallback((sectionIndex: number) => {
    const section = content[sectionIndex];
    if (section.type === 'list' && section.items) {
      updateSection(sectionIndex, {
        items: [...section.items, '']
      });
    }
  }, [content, updateSection]);

  const updateListItem = useCallback((sectionIndex: number, itemIndex: number, value: string) => {
    const section = content[sectionIndex];
    if (section.type === 'list' && section.items) {
      const newItems = [...section.items];
      newItems[itemIndex] = value;
      updateSection(sectionIndex, { items: newItems });
    }
  }, [updateSection]);

  const removeListItem = useCallback((sectionIndex: number, itemIndex: number) => {
    const section = content[sectionIndex];
    if (section.type === 'list' && section.items && section.items.length > 1) {
      const newItems = section.items.filter((_, i) => i !== itemIndex);
      updateSection(sectionIndex, { items: newItems });
    }
  }, [updateSection]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Content Editor</span>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => addSection('paragraph')}>
              <Type className="w-4 h-4 mr-1" />
              Paragraph
            </Button>
            <Button size="sm" variant="outline" onClick={() => addSection('heading')}>
              <Heading className="w-4 h-4 mr-1" />
              Heading
            </Button>
            <Button size="sm" variant="outline" onClick={() => addSection('subheading')}>
              <Heading className="w-3 h-3 mr-1" />
              Subheading
            </Button>
            <Button size="sm" variant="outline" onClick={() => addSection('list')}>
              <List className="w-4 h-4 mr-1" />
              List
            </Button>
            <Button size="sm" variant="outline" onClick={() => addSection('quote')}>
              <Quote className="w-4 h-4 mr-1" />
              Quote
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {content.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>{placeholder}</p>
            <p className="text-sm mt-2">Click the buttons above to add content sections</p>
          </div>
        )}
        
        {content.map((section, index) => (
          <Card key={index} className="border-l-4 border-l-purple-500">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="capitalize">
                  {section.type}
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeSection(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              
              {section.type === 'list' ? (
                <div className="space-y-2">
                  {section.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-2">
                      <Textarea
                        value={item}
                        onChange={(e) => updateListItem(index, itemIndex, e.target.value)}
                        placeholder={`List item ${itemIndex + 1}`}
                        className="flex-1"
                        rows={1}
                      />
                      {section.items && section.items.length > 1 && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeListItem(index, itemIndex)}
                          className="text-red-500"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => addListItem(index)}
                    className="mt-2"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add Item
                  </Button>
                </div>
              ) : (
                <Textarea
                  value={section.content || ''}
                  onChange={(e) => updateSection(index, { content: e.target.value })}
                  placeholder={`Enter ${section.type} content...`}
                  rows={section.type === 'paragraph' ? 3 : 1}
                  className="w-full"
                />
              )}
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default RichTextEditor;
