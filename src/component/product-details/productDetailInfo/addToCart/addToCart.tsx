import style from './addToCart.module.scss'
import { useTranslations } from 'next-intl'

export default function AddToCart(){
    const t = useTranslations()

    return <button className={style.add_to_card}>{t('product.addToCart')}</button>
}