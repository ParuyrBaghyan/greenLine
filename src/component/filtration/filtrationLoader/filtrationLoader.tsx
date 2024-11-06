import { useTranslations } from 'next-intl';
import style from './filtrationLoader.module.scss'
import DiscountsFilter from '../discountsFilter/discountsFilter';

export default function FiltrationLoader() {
    const t = useTranslations();
    const shimmerArray = Array.from({ length: 5 });
    return <div className={style.filtration_loader_container}>
        <h2>{t("filter")}</h2>
        <div className={style.each_filter_section_loader}>
            <span></span>
            <span>
                {shimmerArray.map((_, index) => {
                    return <span key={index}>
                        <p></p>
                        <p></p>
                    </span>;
                })}
            </span>
        </div>
        <DiscountsFilter />
        <div className={style.price_filter_loader}>
            <span></span>
            <span>
                <div></div>
                <div></div>
            </span>
        </div>
        <div className={style.each_filter_section_loader}>
            <span></span>
            <span>
                {shimmerArray.map((_, index) => {
                    return <span key={index}>
                        <p></p>
                        <p></p>
                    </span>;
                })}
            </span>
        </div>
    </div>
}