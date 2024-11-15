import formatPrice from '@/helperFunctions/formatPrice'
import AddToCart from './addToCart/addToCart'
import style from './productDetailInfo.module.scss'

export default function ProductDetailInfo({ productName, productPrice }: { productName: string, productPrice: number }) {


    return <div className={style.product_detail_info}>
        <span>
            <h2>{productName}</h2>
            <p>{formatPrice(productPrice)}֏</p>
        </span>
        <AddToCart />
    </div>
}