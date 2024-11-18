import { BrandDetailsModel } from '@/services/interface/brands/brandDetails'
import style from './brandDetails.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function BrandDetails({ brandDetails }: { brandDetails: BrandDetailsModel }) {
    const t = useTranslations()

    return <div className={style.brand_details} style={{ background: `url(${brandDetails?.photo1})` }}>
        <div className={style.details_container}>
            <div>
                <div className={style.logo_box}>
                    <Image src={brandDetails?.photo2 || ''} alt='logo' width={100} height={100} />
                </div>
                <div>
                    <p>{brandDetails?.name}</p>
                    <span>{brandDetails?.itemCount + ' ' + t("products")} </span>
                </div>
            </div>
        </div>

    </div>
}