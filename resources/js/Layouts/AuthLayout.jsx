import React from "react";
import useDarkMode from "@/Hooks/useDarkMode";
import ToogleDark from "@/Components/Navbar/ToogleDark";
import Account from "@/Components/Account";

export default function AuthLayout({ children, ttitle }) {
    return (
        <div className="relative w-full bg-white dark:bg-slate-950 h-screen usetransition">
            {/* Navbar */}
            <div className="flex justify-between items-center px-2 md:px-4 lg:px-8 usetransition border-b border-dashed border-slate-200/50 dark:border-slate-700/50">
                {/* Logo dan Title Logo */}
                <div className="flex gap-x-2 items-center">
                    <img src="/favicon.ico" alt="" className="h-10 w-10" />
                    <h1 className="font-bold">MUDICOM</h1>
                </div>
                <div className="flex gap-x-3 items-center justify-between">
                    {/* Toogle */}
                    <ToogleDark />
                    {/* Account  */}
                    <Account />
                </div>
            </div>
            {/*Container */}
            <div>{children}</div>
        </div>
    );
}
