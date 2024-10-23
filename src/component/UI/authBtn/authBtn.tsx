import { useTranslations } from "next-intl";
import style from "./authBtn.module.scss";
import { FaRegCircleUser } from "react-icons/fa6";

export default function AuthBtn() {
    const t = useTranslations()

  return (
    <button className={style.auth_btn}>
      <FaRegCircleUser />
      {t("header.signIn")}
    </button>
  );
}
