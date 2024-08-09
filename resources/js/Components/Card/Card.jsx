import { Person } from "@mui/icons-material";
import React from "react";

function Card({ children }) {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default  dark:border-strokedark dark:bg-boxdark py-2 px-4">
            {children}
        </div>
    );
}

function Icon({ icon, size }) {
    return (
        <div
            className={`${
                size
                    ? size
                    : "text-xl md:text-3xl lg:text-4xl h-10 w-10 md:h-15 md:w-15"
            } tracking-tighter leading-3  rounded-full bg-slate-100 dark:bg-black flex items-center justify-center`}
        >
            {icon}
        </div>
    );
}

export default Card;
