
-- Create RLS policies for the blog-images storage bucket
-- Allow anyone to upload images (for blog management)
CREATE POLICY "Allow public uploads to blog-images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'blog-images');

-- Allow anyone to view images (since bucket is public)
CREATE POLICY "Allow public access to blog-images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'blog-images');

-- Allow updates to blog-images (for replacing images)
CREATE POLICY "Allow public updates to blog-images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'blog-images');

-- Allow deletes from blog-images (for removing images)
CREATE POLICY "Allow public deletes from blog-images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'blog-images');
