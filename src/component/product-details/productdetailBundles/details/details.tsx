import { useTranslations } from 'next-intl'
import style from './details.module.scss'

export default function Details({ brandName }: { brandName: string }) {
    const t = useTranslations()

    return <div className={style.details}>
        <div>
            <p>{t('productDetails.detail')}</p>
        </div>
        <div>
            <div>
                <span>{t('productDetails.country')}</span>
                <span>{t('productDetails.manufacturer')}</span>
                <span>{t('productDetails.productCode')}</span>
            </div>
            <div>
                <span></span>
                <span>{brandName}</span>
                <span></span>

            </div>
        </div>
    </div>
}