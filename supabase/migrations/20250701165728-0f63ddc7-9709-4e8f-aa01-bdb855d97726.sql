
-- Delete the Complete Test Article from the database
DELETE FROM public.blog_posts 
WHERE title = 'Complete Test Article: Full Content Rendering Check' 
   OR slug = 'complete-test-article-v2';
