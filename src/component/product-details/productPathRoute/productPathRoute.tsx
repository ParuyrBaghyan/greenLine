import { Categories } from "@/services/interface/product-details/product-details";

import Link from "next/link";

interface ProductPathRouteProps {
    categories: Categories;
}

export default function ProductPathRoute({ categories }: ProductPathRouteProps) {
    const getProductPathData = (categories:any) => {
        let result = [{ id: categories?.catgoryId, name: categories?.categoryName }];
        if (categories?.children && categories?.children.length > 0) {
            categories?.children.forEach((child:any) => {
                result = result.concat(getProductPathData(child));
            });
        }
        return result
    };
    
    return (
        <span>
            {getProductPathData(categories).map(({name}) => {
                return (<p>{name}</p>)
            })}
        </span>
    );
}



// const getProductPathData = (category: Category): ProductPath[] => {
//     let result = [{ id: category.catgoryId, name: category.categoryName, isActive: category.catgoryId }];
    
    // if (category.children && category.children.length > 0) {
    //     category.children.forEach((child) => {
    //         result = result.concat(getProductPathData(child));
    //     });
    // }
    
//     return result;
// };



//     <ProductPathRoute paths={routePath}/>
    
// function ProductPathRoute({ paths }:any) {
//   return (
//     <div className='product_path_route'>
//       {paths?.map((path:any,index:number) => {
//         return (
//           <Link
//             key={path.id}
//             to={`${ROUTES.PRODUCTS.MAIN}?categoryIds=${path.id}&sortBy=${ProductSortEnum.PriceHighToLow}`}
//             className={`route ${(paths.length - 1) === index ? 'active-route' : ''}`}
//           >
//             {path.name} {(paths.length - 1) !== index ? ' / ' : ''}
//           </Link>
//         )
//       })}
//     </div>
//   );
// }
// export default ProductPathRoute