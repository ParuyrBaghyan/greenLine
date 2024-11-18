import ProductsGrid from '@/component/products/productsGrid/productsGrid'
import style from './similarProducts.module.scss'
import { useGetRelatedProductsQuery } from '@/services/product/product-details'

export default function SimilarProducts({ productId }: { productId: number }) {

    const { data, isLoading, isError } = useGetRelatedProductsQuery({ productId })


    return <div className={style.similar_products}>
        {isLoading ? <div className={style.title_loader}></div> : <h2>{data?.data.title}</h2>}
        <ProductsGrid products={data?.data?.products} isLoading={isLoading} />
    </div>
}