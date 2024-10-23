import style from "./headerTopLine.module.scss";
import LanguageSwitcher from "./languageSwitcher/languageSwitcher";

export default function HeaderTopLine() {
  return (
    <div className={style.header_top_line_parent}>
      <div className={style.header_top_line}>
        <div className={style.header_top_line_center}>
          <a href="tel:+37455254444" className={style.call_button}>
            (+374)55 25 44 44
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
