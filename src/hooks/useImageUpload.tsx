
import { useState } from 'react';

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const uploadImage = async (file: File): Promise<string> => {
    setIsUploading(true);
    
    try {
      // Generate unique filename
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substr(2, 9);
      const extension = file.name.split('.').pop();
      const filename = `blog-${timestamp}-${randomId}.${extension}`;
      const imagePath = `/lovable-uploads/${filename}`;
      
      // In a real application, you would upload to a server
      // For this demo, we'll simulate the upload and store the path
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUploadedImages(prev => [...prev, imagePath]);
      return imagePath;
    } catch (error) {
      console.error('Upload failed:', error);
      throw new Error('Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadImage, isUploading, uploadedImages };
};
