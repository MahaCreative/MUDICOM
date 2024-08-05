import { Link } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";

function Account() {
    const accountRef = useRef();
    const [open, setOpen] = useState(false);
    useEffect(() => {
        let handler = (e) => {
            if (!accountRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);
    return (
        <div
            ref={accountRef}
            onClick={() => setOpen(!open)}
            className={`${
                open ? "bg-slate-200 dark:bg-slate-900" : ""
            } flex justify-between items-center gap-3 relative cursor-pointer  py-1 px-2 rounded-sm`}
        >
            <div className="flex flex-col tracking-tight leading-3 text-right">
                <p className="capitalize text-[7pt] font-semibold text-slate-950 dark:text-white">
                    Guntur Madjid
                </p>
                <p className="text-slate-950 dark:text-white text-[8pt]">
                    Admin
                </p>
            </div>
            <div className=" flex gap-x-4 items-center hover:cursor-pointer">
                <img src="" alt="" className="w-5 h-5 rounded-full" />
            </div>
            <div
                className={`${
                    open ? "opacity-100 max-h-full" : " opacity-0 max-h-0"
                } absolute left-0 top-9 w-[100px] bg-slate-200 dark:bg-slate-900 h-[200px] usetransition rounded-sm border border-slate-500/50`}
            >
                <Menu name={"Setting Profile"} />
            </div>
        </div>
    );
}

function Menu({ icon, name, url }) {
    return (
        <Link
            href={url}
            className="px-3 hover:bg-slate-300 hover:dark:bg-slate-800 flex gap-2 items-center tracking-tighter text-[8pt] dark:text-slate-200"
        >
            <div>{icon}</div>
            <p>{name}</p>
        </Link>
    );
}

export default Account;
