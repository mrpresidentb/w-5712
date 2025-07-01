
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: ContentSection[];
  date: string;
  author: string;
  category: string;
  image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote';
  content?: string;
  items?: string[];
}
