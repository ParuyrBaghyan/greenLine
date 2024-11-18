import { useTranslations } from 'next-intl'
import style from './description.module.scss'

export default function Description({description}:{description:string}) {
    const t = useTranslations()

    return <div className={style.description}>
        <div>
            <p>{t('productDetails.description')}</p>
        </div>
        <div>
            <span>Frozen ishli qufta. Store at -10°C to -18°C temperature at 1 month.</span>
        </div>
    </div>
}