
interface PriceInputProps {
    priceFrom?: number;
    priceTo?: number;
    onchange: (e: React.ChangeEvent<HTMLInputElement>, identifier: string) => void
}

export default function PriceInput({ priceFrom, priceTo, onchange }: PriceInputProps) {
    return <input
        type="number"
        defaultValue={priceFrom ? priceFrom : priceTo}
        onChange={(e) => onchange(e, priceFrom ? 'from' : "to")} />
}