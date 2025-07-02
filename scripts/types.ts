export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: any[];
  category: string;
  author: string;
  date: string;
  image_url: string;
  custom_title?: string;
  custom_description?: string;
  custom_keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  created_at: string;
  updated_at: string;
}