import { useTranslations } from 'next-intl'
import style from './details.module.scss'
import { useUpdateUrl } from '@/hooks/useUpdateUrl';
import { ProductSortEnum } from '@/types/enums';

export default function Details({ details }: { details: any }) {
    const t = useTranslations()
    const { updateUrl } = useUpdateUrl();

    function getByBrandHandler() {
        updateUrl({
            id: details.brandId,
            sortBy: ProductSortEnum.PriceHighToLow,
            section: "brands",
            page: 1,
            priceTo: null,
            priceFrom: null
        });
    }

    return <div className={style.details}>
        <div>
            <p>{t('productDetails.details.detail')}</p>
        </div>
        <div>
            <div>
                <span>{t('productDetails.details.country')}</span>
                <span>{t('productDetails.details.manufacturer')}</span>
                <span>{t('productDetails.details.productCode')}</span>
            </div>
            <div>
                <span>{details?.country}</span>
                <span onClick={getByBrandHandler}>{details?.brandName}</span>
                <div className={style.bar_codes}>
                    {details?.barcodes.map((barcode: string) => {
                        return <span key={barcode}>{barcode}</span>
                    })}
                </div>
            </div>
        </div>
    </div>
}