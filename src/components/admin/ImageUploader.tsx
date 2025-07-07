
import React, { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Upload, Image as ImageIcon, CheckCircle, X, FileImage } from 'lucide-react';
import { useImageUpload } from '../../hooks/useImageUpload';
import { toast } from 'sonner';

interface ImageUploaderProps {
  onImageUploaded: (imagePath: string) => void;
  currentImage?: string;
  onRemoveImage?: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  onImageUploaded, 
  currentImage,
  onRemoveImage 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { uploadImage, isUploading } = useImageUpload();
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const processFile = async (file: File) => {
    console.log('File selected:', file.name, 'Type:', file.type, 'Size:', file.size);

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    try {
      setUploadSuccess(false);
      const imagePath = await uploadImage(file);
      console.log('Upload successful, image path:', imagePath);
      onImageUploaded(imagePath);
      setUploadSuccess(true);
      toast.success('Image uploaded successfully!');
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setUploadSuccess(false);
        setImagePreview(null);
      }, 3000);
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
      setImagePreview(null);
    }
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await processFile(file);
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      await processFile(file);
    } else {
      toast.error('Please drop an image file');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleRemoveCurrentImage = () => {
    if (onRemoveImage) {
      onRemoveImage();
      toast.success('Image removed');
    }
  };

  // Show current image if exists
  if (currentImage && !imagePreview && !isUploading) {
    return (
      <div className="space-y-4">
        <div className="relative">
          <img 
            src={currentImage} 
            alt="Current featured image"
            className="w-full max-w-md h-48 object-cover rounded-lg border"
          />
          <Button
            size="sm"
            variant="destructive"
            className="absolute top-2 right-2"
            onClick={handleRemoveCurrentImage}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2"
            size="sm"
          >
            <Upload className="w-4 h-4" />
            Replace Image
          </Button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div 
        className={`border-2 border-dashed rounded-lg p-6 transition-all duration-200 ${
          isDragOver 
            ? 'border-blue-400 bg-blue-50' 
            : isUploading 
            ? 'border-orange-300 bg-orange-50'
            : uploadSuccess
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {imagePreview && isUploading ? (
          <div className="text-center">
            <img 
              src={imagePreview} 
              alt="Upload preview"
              className="mx-auto h-32 w-auto object-cover rounded mb-4"
            />
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-600 mx-auto mb-2"></div>
            <p className="text-sm text-orange-600 font-medium">Uploading image...</p>
          </div>
        ) : uploadSuccess ? (
          <div className="text-green-600 text-center">
            <CheckCircle className="mx-auto h-12 w-12 mb-2" />
            <p className="text-sm font-medium">Image uploaded successfully!</p>
          </div>
        ) : (
          <div className="text-center">
            {isDragOver ? (
              <>
                <FileImage className="mx-auto h-12 w-12 text-blue-500 mb-2" />
                <p className="text-sm text-blue-600 font-medium">Drop your image here</p>
              </>
            ) : (
              <>
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Drag & drop an image here, or click to select
                  </p>
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                    className="flex items-center gap-2"
                    size="sm"
                  >
                    <Upload className="w-4 h-4" />
                    Choose File
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        {!isDragOver && !isUploading && !uploadSuccess && (
          <p className="text-xs text-gray-500 mt-3 text-center">
            Supports JPG, PNG, WebP up to 5MB
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
