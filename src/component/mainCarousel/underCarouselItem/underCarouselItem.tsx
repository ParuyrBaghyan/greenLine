import Image from 'next/image'
import style from './underCarouselItem.module.scss'
import myImageLoader from '@/helperFunctions/imageLoader';

interface BannerImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
  
export default function UnderCarouselItem({
    src,
    alt,
    width,
    height,
  }: BannerImageProps) {
      return (
          <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loader={myImageLoader}
          priority
          />
      );
  }