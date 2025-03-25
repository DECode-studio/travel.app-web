"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ButtonMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 w-[44px] h-[44px] rounded-full border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition duration-300 flex flex-col items-center justify-center"
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}

export default ButtonMode