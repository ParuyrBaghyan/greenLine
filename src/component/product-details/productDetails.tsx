'use client'
import BodyLayout from '@/layouts/bodyLayout/bodyLayout'
import style from './productDetails.module.scss'
import { useGetProductDetailsQuery } from '@/services/product/product-details'
import ProductPathRoute from './productPathRoute/productPathRoute'
import ProductDetailInfo from './productDetailInfo/productDetailInfo'
import ProductdetailBundles from './productdetailBundles/productdetailBundles'
import ProductDetailImage from './productDetailImage/productDetailImage'
import SimilarProducts from './similarProducts/similarProducts'

export default function ProductDetails({ productId }: { productId: number }) {

    const { data, isLoading, isError } = useGetProductDetailsQuery({ productId })

    return <BodyLayout>
        <div className={style.product_details_page}>
            <div>
                <ProductPathRoute categories={data?.data.categories} isLoading={isLoading} />

                <div className={style.product_detail_main_box}>
                    <ProductDetailImage productImage={data?.data.photo} isLoading={isLoading}/>
                    <ProductDetailInfo productName={data?.data?.name} productPrice={data?.data?.price} isLoading={isLoading}/>
                </div>
            </div>
            <ProductdetailBundles details={data?.data} isLoading={isLoading}/>
            <SimilarProducts productId={productId}/>
        </div>
    </BodyLayout>
}