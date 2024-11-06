import style from './discountBedge.module.scss'

interface DiscountBedgeProps {
    percent: number
}

export default function DiscountBedge({ percent }: DiscountBedgeProps) {
    return <span className={style.discount_bedge}>{percent}%</span>
}