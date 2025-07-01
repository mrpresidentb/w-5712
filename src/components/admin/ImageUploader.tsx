
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { useImageUpload } from '@/hooks/useImageUpload';

interface ImageUploaderProps {
  onImageUploaded: (imagePath: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUploaded }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadImage, isUploading } = useImageUpload();
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    console.log('File selected:', file.name, 'Type:', file.type, 'Size:', file.size);

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    try {
      setUploadSuccess(false);
      const imagePath = await uploadImage(file);
      console.log('Upload successful, image path:', imagePath);
      onImageUploaded(imagePath);
      setUploadSuccess(true);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      // Reset success state after 3 seconds
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      // Simulate file input change
      const fakeEvent = {
        target: { files: [file] }
      } as React.ChangeEvent<HTMLInputElement>;
      handleFileSelect(fakeEvent);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div 
      className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {uploadSuccess ? (
        <div className="text-green-600">
          <CheckCircle className="mx-auto h-8 w-8 mb-2" />
          <p className="text-sm font-medium">Image uploaded successfully!</p>
        </div>
      ) : (
        <>
          <ImageIcon className="mx-auto h-8 w-8 text-gray-400 mb-2" />
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              {isUploading ? 'Uploading image...' : 'Upload a new image'}
            </p>
            <Button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="flex items-center gap-2"
              size="sm"
            >
              <Upload className="w-4 h-4" />
              {isUploading ? 'Uploading...' : 'Choose File'}
            </Button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <p className="text-xs text-gray-500 mt-2">
            JPG, PNG, WebP up to 5MB
          </p>
        </>
      )}
    </div>
  );
};

export default ImageUploader;
