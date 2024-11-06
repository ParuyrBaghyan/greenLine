import ProductShimmer from '@/component/product/productShimmerLoader/productShimmer';
import style from './productsGridLoader.module.scss'

export default function ProductsGridLoader() {
    const shimmerArray = Array.from({ length: 20 });

    return <div className={style.products_grid_loader}>
        {shimmerArray?.map((_, index) => (
            <ProductShimmer key={index}/>
    ))}
    </div>
}