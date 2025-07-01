
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = async (file: File): Promise<string> => {
    setIsUploading(true);
    
    try {
      // Generate unique filename
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substring(2, 15);
      const extension = file.name.split('.').pop();
      const filename = `blog-${timestamp}-${randomId}.${extension}`;
      
      console.log('[useImageUpload] Starting upload process');
      console.log('[useImageUpload] File details:', {
        name: file.name,
        size: file.size,
        type: file.type,
        generatedFilename: filename
      });
      
      // Check if bucket exists and is accessible
      console.log('[useImageUpload] Checking bucket accessibility...');
      const { data: buckets, error: bucketsError } = await supabase.storage.listBuckets();
      
      if (bucketsError) {
        console.error('[useImageUpload] Error listing buckets:', bucketsError);
      } else {
        console.log('[useImageUpload] Available buckets:', buckets?.map(b => b.name));
        const blogImagesBucket = buckets?.find(b => b.name === 'blog-images');
        console.log('[useImageUpload] blog-images bucket found:', !!blogImagesBucket);
        if (blogImagesBucket) {
          console.log('[useImageUpload] blog-images bucket details:', blogImagesBucket);
        }
      }
      
      // Upload to Supabase storage with public access
      console.log('[useImageUpload] Attempting upload to blog-images bucket...');
      const { data, error } = await supabase.storage
        .from('blog-images')
        .upload(filename, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: file.type
        });

      console.log('[useImageUpload] Upload result:', { data, error });

      if (error) {
        console.error('[useImageUpload] Supabase upload error details:', {
          message: error.message,
          error: error,
          statusCode: (error as any)?.statusCode,
          details: (error as any)?.details
        });
        throw new Error(`Upload failed: ${error.message}`);
      }

      if (!data || !data.path) {
        console.error('[useImageUpload] No data returned from upload');
        throw new Error('No data returned from upload');
      }

      console.log('[useImageUpload] Upload successful, path:', data.path);
      
      // Get public URL using the correct path
      const { data: publicUrlData } = supabase.storage
        .from('blog-images')
        .getPublicUrl(data.path);

      console.log('[useImageUpload] Public URL data:', publicUrlData);

      if (!publicUrlData?.publicUrl) {
        console.error('[useImageUpload] Failed to get public URL');
        throw new Error('Failed to get public URL');
      }

      console.log('[useImageUpload] Upload successful, public URL:', publicUrlData.publicUrl);
      return publicUrlData.publicUrl;
      
    } catch (error) {
      console.error('[useImageUpload] Upload failed with error:', error);
      
      // Enhanced error logging
      if (error instanceof Error) {
        console.error('[useImageUpload] Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
      }
      
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadImage, isUploading };
};
