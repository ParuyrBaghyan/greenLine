import Image from "next/image";
import myImageLoader from "@/utils/imageLoader";

interface BannerImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function SingleBanner({
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
        />
    );
}
