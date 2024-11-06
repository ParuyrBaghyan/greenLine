import { EachItemBaseModel } from "@/services/interface/filtration/allProudctsFilter";
import style from "./filterEachItem.module.scss";
import { useSearchParams } from "next/navigation";

interface FilterEachItemProps {
  item: EachItemBaseModel;
  selectItemHandler?: (id: number) => void;
  filterName: string;
}

export default function FilterEachItem({ item, selectItemHandler, filterName }: FilterEachItemProps) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const selectedItems = params.get(filterName)
    ? params.get(filterName)!.split(",").map(Number)
    : [];

  const handleCheckboxClick = () => {
    if (selectItemHandler) {
      selectItemHandler(item.id);
    }
  };

  return (
    <div
      key={item.id}
      className={style.each_checkbox}
      onClick={handleCheckboxClick}
    >
      <label className={style.container}>
        <input
          type="checkbox"
          checked={selectedItems.includes(item.id) || params.get(filterName) === "true"}
          onChange={handleCheckboxClick}
        />
        <span className={style.checkmark}></span>
      </label>
      <p>{item.name}</p>
    </div>
  );
}
