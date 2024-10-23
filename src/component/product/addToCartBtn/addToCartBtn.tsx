import { useTranslations } from 'use-intl'
import style from './addToCartBtn.module.scss'


export default function AddToCartBtn(){
    const t = useTranslations()

    return <button className={style.add_to_cart_btn}>{t('product.addToCart')}</button>
}