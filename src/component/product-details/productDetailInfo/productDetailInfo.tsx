import formatPrice from '@/helperFunctions/formatPrice'
import AddToCart from './addToCart/addToCart'
import style from './productDetailInfo.module.scss'
import ProductDetailInfoLoader from './productDetailInfoLoader/productDetailInfoLoader'

export default function ProductDetailInfo({ productName, productPrice,isLoading }: { productName: string, productPrice: number,isLoading:boolean }) {

    if(isLoading) return <ProductDetailInfoLoader />

    return <div className={style.product_detail_info}>
        <span>
            <h2>{productName}</h2>
            <p>{formatPrice(productPrice)}֏</p>
        </span>
        <AddToCart />
    </div>
}