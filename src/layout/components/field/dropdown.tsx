'use client';

import { ReactNode, useEffect, useRef, useState } from "react";
import { MultiplicationSignIcon } from "hugeicons-react";
import { FieldIconButton } from "../button/icon-button";

type DropdownFieldProps<T> = {
  placeholder: string;
  description: string;
  className?: string;
  hideVerticalLineClass?: string;
  autoFocus?: boolean;
  icon: ReactNode;
  listData: T[];
  initData?: string;
  renderItem: (item: T) => ReactNode;
  onSelect: (value: T) => void;
};

const DropdownField = <T,>({
  placeholder,
  description,
  className = "nc-flex-1.5",
  hideVerticalLineClass = "left-10 -right-0.5",
  autoFocus = false,
  icon,
  listData,
  initData = '',
  renderItem,
  onSelect,
}: DropdownFieldProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState<string>(initData);
  const [showPopover, setShowPopover] = useState(autoFocus);

  useEffect(() => {
    if (showPopover) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showPopover]);

  const handleClickOutside = (event: MouseEvent) => {
    if (!containerRef.current?.contains(event.target as Node)) {
      setShowPopover(false);
    }
  };

  return (
    <div className={`relative flex ${className}`} ref={containerRef}>
      <div
        className={`flex z-10 flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left  ${showPopover ? "nc-hero-field-focused" : ""
          }`}
        onClick={() => setShowPopover(true)}
      >
        <div className="text-neutral-300 dark:text-neutral-400">{icon}</div>
        <div className="flex-grow">
          <input
            ref={inputRef}
            className={`text-black dark:text-white block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate`}
            placeholder={placeholder}
            value={initData}
            onChange={(e) => setValue(e.target.value)}
            autoFocus={showPopover}
          />
          <span className="block mt-0.5 text-sm text-black dark:text-white font-light">
            <span className="line-clamp-1 text-black dark:text-white">
              {initData || description}
            </span>
          </span>
          {initData && showPopover && (
            <FieldIconButton
              icon={<MultiplicationSignIcon className="w-4 h-4 text-black dark:text-white" />}
              onClick={() => {
                let data: any = {}
                onSelect(data);
                setValue("")
              }}
            />
          )}
        </div>
      </div>

      {showPopover && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 z-0 bg-white dark:bg-neutral-800 ${hideVerticalLineClass}`}
        ></div>
      )}

      {showPopover && (
        <div className="absolute left-0 z-40 w-full min-w-[300px] sm:min-w-[500px] bg-white dark:bg-neutral-800 top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto">
          {listData.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setValue(String(item));
                onSelect(item);
                setShowPopover(false);
              }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownField;
