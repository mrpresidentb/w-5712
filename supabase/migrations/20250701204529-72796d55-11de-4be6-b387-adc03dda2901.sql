-- Add custom SEO/meta data columns to blog_posts table
ALTER TABLE public.blog_posts 
ADD COLUMN custom_title text,
ADD COLUMN custom_description text,
ADD COLUMN custom_keywords text,
ADD COLUMN og_title text,
ADD COLUMN og_description text,
ADD COLUMN og_image text,
ADD COLUMN twitter_title text,
ADD COLUMN twitter_description text,
ADD COLUMN twitter_image text;