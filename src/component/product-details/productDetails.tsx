'use client'
import BodyLayout from '@/layouts/bodyLayout/bodyLayout'
import style from './productDetails.module.scss'
import { useGetProductDetailsQuery } from '@/services/product/product-details'
import ProductPathRoute from './productPathRoute/productPathRoute'

export default function ProductDetails({ productId }: { productId: number }) {

    const { data, isLoading, isError } = useGetProductDetailsQuery({ productId })



    return <BodyLayout>
        <div className={style.product_details_page}>
            <ProductPathRoute categories={data?.data.categories}/>
        </div>
    </BodyLayout>
}