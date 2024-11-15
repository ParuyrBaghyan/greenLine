import { useEffect, useState, useCallback } from "react";

interface PriceInputProps {
    type: string;
    value?: any;
    onchange: (value: string, identifier: string) => void;
}

export default function PriceInput({ value, onchange, type }: PriceInputProps) {
    const { price } = value;

    const [mainValue, setValue] = useState(price);

    const handleChange =(value: string) => {
        if (+value !== mainValue) {
            setValue(+value);
            onchange(value, type);
        }
    };

    useEffect(() => {
        if (price !== mainValue) {
            setValue(price);
        }
    }, [price]);

    return (
        <input
            type="number"
            value={mainValue}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
}
