import useDarkMode from "@/Hooks/useDarkMode";
import React from "react";

export default function ToogleDark() {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`${
                isDarkMode ? "bg-white" : "bg-slate-950"
            } w-12 h-3 rounded-full  relative usetransition overflow-hidden`}
        >
            <div
                className={`absolute left-0 top-0 ${
                    isDarkMode ? "w-full" : "w-0"
                } h-full bg-white usetransition`}
            ></div>
            <div
                className={`absolute left-0 top-0 w-full h-full flex flex-row  items-center ${
                    isDarkMode ? "justify-end" : "justify-start"
                }`}
            >
                <div
                    className={`${
                        isDarkMode ? "bg-slate-950" : "bg-white"
                    } w-5 h-5  rounded-full flex justify-center items-center`}
                >
                    {isDarkMode ? (
                        <div className="text-[4pt] text-dark-950 dark:text-white flex flex-col items-center justify-center">
                            D
                        </div>
                    ) : (
                        <div className="text-[4pt] text-dark-950 dark:text-white flex flex-col items-center justify-center">
                            L
                        </div>
                    )}
                </div>
            </div>
        </button>
    );
}
