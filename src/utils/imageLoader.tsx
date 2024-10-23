interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
  }
  
  export default function myImageLoader({ src, width, quality = 75 }: ImageLoaderProps) {
    if (!src) {
      throw new Error("Image source is required.");
    }
  
    return `${src}?w=${width}&q=${quality}`;
  }
  