import { useTranslations } from 'next-intl'
import style from './ingredients.module.scss'

export default function Ingredients({ ingredients }: { ingredients: string }) {
    const t = useTranslations()

    return <div className={style.ingredients}>
        <div>
            <p>{t('productDetails.ingredients')}</p>
        </div>
        <div>
            <span>Bulgur, qufta, beef, onions, butter, spices.</span>
        </div>
    </div>
}