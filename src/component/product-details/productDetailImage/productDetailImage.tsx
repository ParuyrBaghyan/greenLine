import { zoom } from '@/helperFunctions/zoom'
import style from './productDetailImage.module.scss'
import ProductDetailImageLoader from './productDetailImageLoader'

export default function ProductDetailImage({ productImage, isLoading }: { productImage: string, isLoading: boolean }) {

  if(isLoading) return <ProductDetailImageLoader />

  return <div className={style.product_detail_image}>
    <div
      className={style.I_zoomable_image}
      onMouseMove={zoom}
      style={{
        backgroundImage: `url(${productImage || ""})`,
      }}
    >
      <img
        src={productImage || "/fallback-image.jpg"}
        alt={productImage}
      />
    </div>
  </div>
}