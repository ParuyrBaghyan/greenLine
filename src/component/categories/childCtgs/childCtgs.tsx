import { useGetAllChildrenQuery } from "@/services/categories/categories";
import style from "./childCtgs.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { showHideCtgDD } from "@/store/categories/categoriesSlice";

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
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const dispatch = useDispatch();

  const router = useRouter();

  function showCategoryProductsHandler(categoryId: number) {
    setSelectedCategoryId((prevId) =>
      prevId === categoryId ? null : categoryId
    );
    // router.push(`/products/${categoryId}`);
    dispatch(showHideCtgDD());
  }

  return (
    <div className={style.child_ctgs_container}>
      {data?.data?.children?.map((ctgChild: ChildCtg) => (
        <div key={ctgChild.id} className={style.child}>
          <p>{ctgChild.name}</p>
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
