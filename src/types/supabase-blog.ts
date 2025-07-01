
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
  custom_title?: string | null;
  custom_description?: string | null;
  custom_keywords?: string | null;
  og_title?: string | null;
  og_description?: string | null;
  og_image?: string | null;
  twitter_title?: string | null;
  twitter_description?: string | null;
  twitter_image?: string | null;
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
