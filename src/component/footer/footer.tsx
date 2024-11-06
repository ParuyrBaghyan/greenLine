"use client";
import Image from "next/image";
import style from "./footer.module.scss";
import HeadeFootLayout from "@/layouts/headFootLayout/headFootLayout";
import { useTranslations } from "use-intl";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import InstagramSvg from "../UI/svg/instagramSvg/instagramSvg";

export default function Footer() {
  const t = useTranslations();

  const aboutCompanyList = t.raw("footer.aboutCompany.aboutCompanyList");
  const forBuyersList = t.raw("footer.forBuyers.forBuyersList");

  return (
    <HeadeFootLayout>
      <div className={style.footer_top_container}>
        <div className={style.footer_logo}>
          <Image
            src="https://greenline.yerevan-city.am/static/media/logo.bc40eaf6.svg"
            alt="Green Line"
            width={200}
            height={40}
          />
          <span>{t("footer.logoText")}</span>
        </div>

        <div className={style.list}>
          <span>
            <p>{t("footer.aboutCompany.title")}</p>
            <ul>
              {aboutCompanyList.map((item: string, index: number) => (
                <li key={index}>
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </span>
        </div>

        <div className={style.list}>
          <span>
            {" "}
            <p>{t("footer.forBuyers.title")}</p>
            <ul>
              {forBuyersList.map((item: string, index: number) => (
                <li key={index}>
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
          </span>
        </div>

        <div className={style.contacts}>
          <span>
            <Link href="https://www.facebook.com/natali.group/?locale=hy_AM">
              <FaFacebookSquare />
            </Link>
            <Link href="https://www.facebook.com/natali.group/?locale=hy_AM">
              <FaYoutubeSquare />
            </Link>
            <Link href="https://www.facebook.com/natali.group/?locale=hy_AM">
              <InstagramSvg />
            </Link>
          </span>
          <p>{t("footer.forQuestions")}</p>
        </div>
      </div>

      <div className={style.footer_bottom_container}></div>
    </HeadeFootLayout>
  );
}
