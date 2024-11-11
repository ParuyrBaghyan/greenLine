import { useTranslations } from 'next-intl';
import style from './clearButton.module.scss';
import clearFiltration from '@/helperFunctions/clearFiltration';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


interface ClearFiltrationButtonProps {
    priceFrom: number,
    priceTo: number
}

export default function ClearFiltrationButton({ priceFrom, priceTo }: ClearFiltrationButtonProps) {
    const t = useTranslations();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    function clearFunctionHandler() {
        clearFiltration(searchParams, pathname, router, priceFrom, priceTo);
    }

    return (
        <span className={style.clear_filter_button} onClick={clearFunctionHandler}>{t('clear')}</span>
    );
}
