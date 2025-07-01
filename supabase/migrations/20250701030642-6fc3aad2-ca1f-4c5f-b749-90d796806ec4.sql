
-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  content JSONB NOT NULL, -- Store structured content as JSON
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  author TEXT NOT NULL DEFAULT 'IT Carolina Team',
  category TEXT NOT NULL,
  image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog categories table for better organization
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog authors table (for future expansion)
CREATE TABLE public.blog_authors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
);

-- Create storage policy for blog images (public read)
CREATE POLICY "Public can view blog images" ON storage.objects
FOR SELECT USING (bucket_id = 'blog-images');

-- Create storage policy for blog images (authenticated users can upload)
CREATE POLICY "Authenticated users can upload blog images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'blog-images' AND
  auth.role() = 'authenticated'
);

-- Create storage policy for blog images (authenticated users can update)
CREATE POLICY "Authenticated users can update blog images" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'blog-images' AND
  auth.role() = 'authenticated'
);

-- Create storage policy for blog images (authenticated users can delete)
CREATE POLICY "Authenticated users can delete blog images" ON storage.objects
FOR DELETE USING (
  bucket_id = 'blog-images' AND
  auth.role() = 'authenticated'
);

-- Enable RLS on blog tables (public read access)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_authors ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to published blog posts
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts
FOR SELECT USING (published = true);

CREATE POLICY "Anyone can view blog categories" ON public.blog_categories
FOR SELECT USING (true);

CREATE POLICY "Anyone can view blog authors" ON public.blog_authors
FOR SELECT USING (true);

-- Insert default categories
INSERT INTO public.blog_categories (name, description) VALUES
('Troubleshooting', 'Computer troubleshooting guides and solutions'),
('Computer Repair', 'Computer repair tips and when to seek professional help'),
('Home Office', 'Home office setup and productivity tips'),
('Printer Support', 'Printer troubleshooting and maintenance guides'),
('Cybersecurity', 'Security tips and best practices for businesses'),
('Networking', 'Network setup and troubleshooting guides');

-- Insert sample blog posts with current dates
INSERT INTO public.blog_posts (slug, title, excerpt, content, date, category, image_url) VALUES
(
  'common-computer-problems-solutions',
  'Common Computer Problems and Solutions Every User Should Know',
  'Learn how to identify and fix the most frequent computer issues that slow down your PC, from startup problems to performance issues. Get expert tips from Charlotte''s trusted IT support team.',
  '[
    {"type": "paragraph", "content": "Computer problems can be frustrating, especially when they interrupt your work or personal tasks. As Charlotte''s leading IT support company, we see the same issues repeatedly. The good news? Many common computer problems have simple solutions you can try before calling for professional help."},
    {"type": "heading", "content": "Slow Computer Performance"},
    {"type": "subheading", "content": "Signs Your Computer is Running Slowly"},
    {"type": "list", "items": ["Programs take forever to load", "Web browsers are sluggish", "File transfers crawl along", "Overall system responsiveness is poor"]},
    {"type": "paragraph", "content": "Start by restarting your computer - this simple step resolves many performance issues. Next, check your available storage space. If your hard drive is more than 85% full, it''s time to clean up files or consider an upgrade."}
  ]'::jsonb,
  CURRENT_DATE,
  'Troubleshooting',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop'
),
(
  'when-repair-vs-replace-computer',
  'When to Repair vs Replace Your Computer: A Cost-Benefit Guide',
  'Struggling to decide whether to fix your old computer or buy a new one? Our IT experts break down the key factors to consider, helping you make the most cost-effective decision for your situation.',
  '[
    {"type": "paragraph", "content": "Making the decision between repairing and replacing your computer can be challenging. This guide will help you evaluate the key factors to make the most cost-effective choice for your situation."}
  ]'::jsonb,
  CURRENT_DATE - INTERVAL '3 days',
  'Computer Repair',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop'
),
(
  'home-office-setup-tips',
  'Home Office Setup Tips: Create a Productive IT Environment',
  'Working from home? Learn how to set up a reliable, efficient home office with proper networking, ergonomics, and technology choices. Expert advice from Charlotte''s IT support professionals.',
  '[
    {"type": "paragraph", "content": "Creating an effective home office requires more than just a desk and chair. Your technology setup can make or break your productivity and professional success."}
  ]'::jsonb,
  CURRENT_DATE - INTERVAL '5 days',
  'Home Office',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at on blog_posts
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
