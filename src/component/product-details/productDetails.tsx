'use client'
import BodyLayout from '@/layouts/bodyLayout/bodyLayout'
import style from './productDetails.module.scss'
import { useGetProductDetailsQuery } from '@/services/product/product-details'
import ProductPathRoute from './productPathRoute/productPathRoute'
import ProductDetailImage from './productDetailImage/productDetailImage'
import ProductDetailInfo from './productDetailInfo/productDetailInfo'
import ProductdetailBundles from './productdetailBundles/productdetailBundles'

export default function ProductDetails({ productId }: { productId: number }) {

    const { data, isLoading, isError } = useGetProductDetailsQuery({ productId })

    return <BodyLayout>
        <div className={style.product_details_page}>
            <div>
                <ProductPathRoute categories={data?.data.categories} />

                <div className={style.product_detail_main_box}>
                    <ProductDetailImage />
                    <ProductDetailInfo productName={data?.data?.name} productPrice={data?.data?.price} />
                </div>
            </div>
            <ProductdetailBundles brandName={data?.data?.brandName}/>
        </div>
    </BodyLayout>
}