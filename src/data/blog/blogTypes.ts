
export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote';
  content?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  content: ContentSection[];
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
}
