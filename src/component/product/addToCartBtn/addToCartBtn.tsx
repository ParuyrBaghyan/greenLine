import { useTranslations } from 'use-intl'
import style from './addToCartBtn.module.scss'


interface AddToCartBtnProps {
    onclick: (event: React.MouseEvent) => void
}

export default function AddToCartBtn({ onclick }: AddToCartBtnProps) {
    const t = useTranslations()

    function zx(event:React.MouseEvent){
        event.stopPropagation()
    }

    return <button onClick={onclick} className={style.add_to_cart_btn}>{t('product.addToCart')}</button>
}