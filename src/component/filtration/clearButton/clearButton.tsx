import { useTranslations } from 'next-intl';
import style from './clearButton.module.scss';
import clearFiltration from '@/helperFunctions/clearFiltration';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function ClearFiltrationButton() {
    const t = useTranslations();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    function clearFunctionHandler() {
        clearFiltration(searchParams, pathname, router);
    }

    return (
        <span className={style.clear_filter_button} onClick={clearFunctionHandler}>{t('clear')}</span>
    );
}
