import { useTranslations } from "next-intl";
import style from './showMoreBtn.module.scss'

interface ShowMoreBtnProps {
    showMoreItemsHandler: () => void
}

export default function ShowMoreBtn({ showMoreItemsHandler }: ShowMoreBtnProps) {
    const t = useTranslations();

    return <span className={style.show_more_btn} onClick={showMoreItemsHandler}>{t("showMore")}</span>
}