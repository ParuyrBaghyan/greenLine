import AuthBtn from "@/component/UI/authBtn/authBtn";
import style from "./headerRightSide.module.scss";
import SearchInput from "./searchInput/searchInput";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function HeaderRightSide() {
  return <div className={style.main_header_right_side}>
    <SearchInput />
    <IoIosHeartEmpty />
    <HiOutlineShoppingBag />
    <AuthBtn />
  </div>;
}
