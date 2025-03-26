import React from "react";

type ComponentsProp = {
    value: number
    ratio: number
    text?: string
    textSize?: string
};

const CircularProgress = ({
    value,
    ratio,
    text,
    textSize = 'text-xl'
}: ComponentsProp) => {
    const percentage = (value / ratio) * 100;
    const dashOffset = 100 - percentage;

    return (
        <div className="flex flex-row">
            <div className="relative size-40">
                {/* SVG Progress */}
                <svg
                    className="size-full -rotate-90"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Lingkaran latar */}
                    <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-gray-200 dark:text-neutral-700"
                        strokeWidth={2}
                    />
                    {/* Lingkaran progress */}
                    <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-cyan-700 dark:text-cyan-700"
                        strokeWidth={2}
                        strokeDasharray="100"
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Teks Status */}
                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <span className={`text-center ${textSize} font-bold text-cyan-700 dark:text-cyan-700`}>
                        {text ?? ''}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CircularProgress;
