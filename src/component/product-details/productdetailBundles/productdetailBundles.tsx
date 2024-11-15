import { useTranslations } from 'next-intl'
import style from './productdetailBundles.module.scss'
import Details from './details/details'

export default function ProductdetailBundles({ brandName }: { brandName: string }) {
    const t = useTranslations()



    return <div className={style.product_detail_bundles}>
      <Details brandName={brandName}/>
    </div>
}