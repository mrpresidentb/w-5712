
import { useState } from 'react';

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const uploadImage = async (file: File): Promise<string> => {
    setIsUploading(true);
    
    try {
      // Create a URL for the uploaded file
      const imageUrl = URL.createObjectURL(file);
      
      // Generate unique filename for reference
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substr(2, 9);
      const extension = file.name.split('.').pop();
      const filename = `blog-${timestamp}-${randomId}.${extension}`;
      
      // In a real app, you would upload to server here
      // For demo purposes, we'll use the object URL
      console.log('Uploading file:', filename, 'Size:', file.size);
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setUploadedImages(prev => [...prev, imageUrl]);
      return imageUrl;
    } catch (error) {
      console.error('Upload failed:', error);
      throw new Error('Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadImage, isUploading, uploadedImages };
};
