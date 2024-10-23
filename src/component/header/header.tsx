import HeadFootLayout from "@/layouts/headFootLayout/headFootLayout";
import style from "./header.module.scss";
import HeaderTopLine from "../header/headerTopLine/headerTopLine";
import HeaderLeftSide from "./headerLeftSide/headerLeftSide";
import HeaderRightSide from "./headerRightSide/headerRightSide";
import Categories from "../categories/categories";

export default function Header() {
  return (
    <HeadFootLayout
      additionalComponent={<HeaderTopLine />}
      additionalClass={style.additionalClass}
    >
      <div className={style.main_header_container}>
        <HeaderLeftSide />
        <HeaderRightSide />
      </div>
      <Categories />
    </HeadFootLayout>
  );
}
