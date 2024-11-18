import { Categories } from "@/services/interface/product-details/product-details";
import style from './productPathRoute.module.scss'
import ProductPathRouteLoader from "./productPathRouteLoader";
import { ProductSortEnum } from "@/types/enums";
import { useUpdateUrl } from "@/hooks/useUpdateUrl";

interface ProductPathRouteProps {
    categories: Categories;
    isLoading: boolean
}

export default function ProductPathRoute({ categories , isLoading }: ProductPathRouteProps) {
    const { updateUrl } = useUpdateUrl();

    function showCategoryProductsHandler(categoryId: number) {
    
        updateUrl({
          id:categoryId,
          sortBy: ProductSortEnum.PriceHighToLow,
          section: "categories",
          page: 1,
          priceTo: null,
          priceFrom: null
        });
      }


    if(isLoading) return <ProductPathRouteLoader />

    const getProductPathData = (categories: any) => {
        let result = [{ id: categories?.catgoryId, name: categories?.categoryName }];
        if (categories?.children && categories?.children.length > 0) {
            categories?.children.forEach((child: any) => {
                result = result.concat(getProductPathData(child));
            });
        }
        return result
    };

    return <div className={style.product_path_route}>
        {getProductPathData(categories).map(({ name, id }, index) => {
            return <div key={index}>
                <p onClick={() => showCategoryProductsHandler(id)}>{name}</p>
                <span>{index !== getProductPathData(categories).length - 1 && '/'}</span>
            </div>
        })}
    </div>
}
