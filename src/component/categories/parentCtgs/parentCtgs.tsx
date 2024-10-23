import { useGetParentCategoriesQuery } from "@/services/categories/categories";
import style from "./parentCtgs.module.scss";
import { useDispatch } from "react-redux";
import { showHideCtgDD } from "@/store/categories/categoriesSlice";

interface ParentCtgsProps {
  getParentId: (parentId: number) => void;
}

export default function ParentCtgs({ getParentId }: ParentCtgsProps) {
  const { data, isError, isLoading } = useGetParentCategoriesQuery(null);

  const dispatch = useDispatch();

  function showCtgDDHandler() {
    dispatch(showHideCtgDD());
  }

  return (
    <div className={style.parent_ctgs_container}>
      {data?.data.categories.map((parentCtg: ParentCtgModel) => {
        return (
          <p
            key={parentCtg.id}
            onClick={showCtgDDHandler}
            onMouseOver={() => getParentId(parentCtg.id)}
          >
            {parentCtg.name}
          </p>
        );
      })}
    </div>
  );
}
