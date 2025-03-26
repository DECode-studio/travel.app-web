import React, { useState } from "react";

export interface NumberInputProps {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    sizeClass?: string;
    fontClass?: string;
    rounded?: string;
    className?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
    value = 1,
    min = 1,
    max = 100,
    step = 1,
    onChange,
    sizeClass = "h-11",
    fontClass = "text-sm font-normal",
    rounded = "rounded-2xl",
    className = "",
}) => {
    const [currentValue, setCurrentValue] = useState<number>(value);

    const handleIncrement = () => {
        if (currentValue < max) {
            const newValue = currentValue + step;
            setCurrentValue(newValue);
            onChange?.(newValue);
        }
    };

    const handleDecrement = () => {
        if (currentValue > min) {
            const newValue = currentValue - step;
            setCurrentValue(newValue);
            onChange?.(newValue);
        }
    };

    return (
        <div
            className={`flex items-center border border-neutral-200 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus-within:ring-primary-6000 dark:focus-within:ring-opacity-25 dark:bg-neutral-900 ${rounded} ${sizeClass} ${className}`}
        >
            <input
                type="number"
                value={currentValue}
                readOnly
                className={`flex-grow text-black dark:text-white text-center bg-transparent border-none ${fontClass} px-4 py-3 rounded-tl-2xl rounded-bl-2xl w-full`}
            />

            <div className="flex flex-row items-center justify-center">
                <button
                    onClick={handleDecrement}
                    disabled={currentValue <= min}
                    className="h-11 w-11 px-3 py-1 text-white disabled:opacity-50 bg-cyan-700"
                >
                    -
                </button>
                <button
                    onClick={handleIncrement}
                    disabled={currentValue >= max}
                    className="h-11 w-11 px-3 py-1 text-white disabled:opacity-50 bg-cyan-700 rounded-tr-2xl rounded-br-2xl"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default NumberInput;
