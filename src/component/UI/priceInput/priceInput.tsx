
interface PriceInputProps {
    type:string;
    value?: any;
    onchange: (e: React.ChangeEvent<HTMLInputElement>, identifier: string) => void
}

export default function PriceInput({ value, onchange, type }: PriceInputProps) {
    const {price} = value

    return <input
        type="number"
        defaultValue={price}
        onChange={(e) => onchange(e, type)} />
}