import { useGetParentCategoriesQuery } from "@/services/categories/categories";
import style from "./parentCtgs.module.scss";
import { useDispatch } from "react-redux";
import { showHideCtgDD } from "@/store/categories/categoriesSlice";
import ParentCtgsLoader from "./parentCtgsLoader/parentCtgsLoader";
import { ProductSortEnum } from "@/types/enums";
import { useUpdateUrl } from "@/hooks/useUpdateUrl";

interface ParentCtgsProps {
  getParentId: (parentId: number) => void;
}

export default function ParentCtgs({ getParentId }: ParentCtgsProps) {
  const { data, isError, isLoading } = useGetParentCategoriesQuery(null);
  const dispatch = useDispatch();
  const { updateUrl } = useUpdateUrl();

  function parentCtgActionsHandler(parentCtg: ParentCtgModel) {
    dispatch(showHideCtgDD());

    updateUrl({
      id: parentCtg.id,
      sortBy: ProductSortEnum.PriceHighToLow,
      section: "categories",
      page: 1,
      priceTo: 0,
      priceFrom: 0
    });
  }

  if (isLoading) {
    return <ParentCtgsLoader />;
  }

  return (
    <div className={style.parent_ctgs_container}>
      {data?.data.categories.map((parentCtg: ParentCtgModel) => {
        return (
          <p
            key={parentCtg.id}
            onClick={() => parentCtgActionsHandler(parentCtg)}
            onMouseOver={() => getParentId(parentCtg.id)}
          >
            {parentCtg.name}
          </p>
        );
      })}
    </div>
  );
}
