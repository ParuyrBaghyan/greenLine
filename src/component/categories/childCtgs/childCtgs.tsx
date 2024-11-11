import { useGetAllChildrenQuery } from "@/services/categories/categories";
import style from "./childCtgs.module.scss";
import { useDispatch } from "react-redux";
import { showHideCtgDD } from "@/store/categories/categoriesSlice";
import ChildCtgsLoader from "./childCtgsLoader/childCtgsLoader";
import { ProductSortEnum } from "@/types/enums";
import { useUpdateUrl } from "@/hooks/useUpdateUrl";

interface ChildCtgsProps {
  parentId: number;
}

interface ChildCtg {
  id: number;
  name: string;
  isAdult: boolean;
  children: ChildCtg[];
}

export default function ChildCtgs({ parentId }: ChildCtgsProps) {
  const { data, isError, isLoading } = useGetAllChildrenQuery({ parentId });
  const dispatch = useDispatch();
  const { updateUrl } = useUpdateUrl();

  function showCategoryProductsHandler(categoryId: number) {
    dispatch(showHideCtgDD());


    updateUrl({
      id: categoryId,
      sortBy: ProductSortEnum.PriceHighToLow,
      section: "categories",
      page: 1,
      priceTo: null,
      priceFrom: null
    });
  }

  if (isLoading) {
    return <ChildCtgsLoader />;
  }

  return (
    <div className={style.child_ctgs_container}>
      {data?.data?.children?.map((ctgChild: ChildCtg) => (
        <div key={ctgChild.id} className={style.child}>
          <p onClick={() => showCategoryProductsHandler(ctgChild.id)}>
            {ctgChild.name}
          </p>
          <div className={style.subsection_children}>
            {ctgChild.children.map((child) => (
              <span
                onClick={() => showCategoryProductsHandler(child.id)}
                key={child.id}
              >
                {child.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
