import { Categories } from "@/services/interface/product-details/product-details";
import style from './productPathRoute.module.scss'

interface ProductPathRouteProps {
    categories: Categories;
}

export default function ProductPathRoute({ categories }: ProductPathRouteProps) {
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
                <p>{name}</p>
                <span>{index !== getProductPathData(categories).length - 1 && '/'}</span>
            </div>
        })}
    </div>
}
