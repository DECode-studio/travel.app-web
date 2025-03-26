import React, { LegacyRef, useState } from "react";

type OptionProp = {
    value: string | number | readonly string[] | undefined;
    label: string;
};

type SelectFieldProps<T = HTMLDivElement> = {
    ref?: LegacyRef<T> | undefined;
    options: OptionProp[];
    placeholder?: string;
    className?: string;
    onChange?: (value: string | number | readonly string[] | undefined) => void;
};

const SelectField = ({
    ref,
    options,
    placeholder = "Select option...",
    className,
    onChange
}: SelectFieldProps) => {
    const [selectedLabel, setSelectedLabel] = useState<string>(placeholder);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSelect = (option: OptionProp) => {
        setSelectedLabel(option.label);
        setIsOpen(false);
        onChange && onChange(option.value);
    };

    return (
        <div
            ref={ref}
            className="max-w-sm relative"
        >
            <button
                type="button"
                className={`advance-select-toggle flex items-center justify-between border rounded-2xl px-3 py-2 bg-white shadow-sm ${className}`}
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedLabel}</span>
                <span className="icon-[tabler--caret-up-down] flex-shrink-0 size-4 text-base-content"></span>
            </button>
            {isOpen && (
                <div className="advance-select-menu absolute left-0 right-0 mt-1 bg-white shadow-lg rounded-lg">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="advance-select-option flex justify-between items-center w-full px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option)}
                        >
                            <span>{option.label}</span>
                            <span className="icon-[tabler--check] flex-shrink-0 size-4 text-primary hidden selected:block"></span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectField;
