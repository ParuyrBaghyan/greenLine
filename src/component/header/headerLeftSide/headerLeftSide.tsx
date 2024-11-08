'use client'
import style from "./headerLeftSide.module.scss";
import Image from "next/image";
import CategoryButton from "@/component/UI/categoryButton/categoryButton";
import myImageLoader from "@/helperFunctions/imageLoader";
import Link from "next/link";

export default function HeaderLeftSide() {
  return (
        <div className={style.main_header_left_side}>
         <Link href='/'> <Image
            src="https://greenline.yerevan-city.am/static/media/logo.bc40eaf6.svg"
            alt="log"
            loader={myImageLoader}
            width={180}
            height={70}
            priority
          /></Link>
          <CategoryButton />
        </div>
  );
}
