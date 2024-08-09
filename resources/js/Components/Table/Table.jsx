import { Link } from "@inertiajs/react";
import { Cancel, MenuOpen, MoreVert } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";

function Table({ children }) {
    return (
        <div className=" bg-slate-200/90 dark:bg-slate-900/50 rounded-md shadow-sm dark:shadow-black py-2 px-2">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* <tbody>
                    {jabatan.length > 0 &&
                        jabatan.map((item, key) => (
                            <tr
                                key={key}
                                class=" border-b dark:bg-gray-800 dark:border-boxdark hover:dark:bg-slate-900 hover:bg-slate-100 odd:dark:bg-slate-900/50 odd:bg-slate-200/50 text-slate-950 dark:text-white"
                            >
                                <td className="py-3 text-center w-[100px]">
                                    {key + 1}
                                </td>
                                <td className="py-3 ">{item.nama_jabatan}</td>
                                <td className="py-3 ">{item.gaji}</td>
                            </tr>
                        ))}
                </tbody> */}
                {children}
            </table>
        </div>
    );
}

function thead({ children }) {
    return (
        <thead className="text-xs text-slate-950 dark:text-white text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {children}
        </thead>
    );
}
function th({ children, className }) {
    return (
        <th
            scope="col"
            className={`${
                className ? className : ""
            } px-6 py-3 border-b border-boxdark`}
        >
            {children}
        </th>
    );
}

function tbody({ children }) {
    return <tbody>{children}</tbody>;
}
function td({ children, className }) {
    return (
        <td
            className={`${
                className ? className : ""
            } px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-slate-950`}
        >
            {children}
        </td>
    );
}
function tr({ children, className }) {
    return (
        <tr
            className={`${
                className ? className : ""
            } border-b border-boxdark odd:bg-slate-100/50 odd:dark:bg-slate-900/50 hover:bg-slate-100/70 hover:dark:bg-slate-800/80 usetransition`}
        >
            {children}
        </tr>
    );
}

function menu({ children }) {
    const [openMenu, setOPenMenu] = useState(false);
    const menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOPenMenu(false);
            }
        };
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });
    return (
        <div
            onClick={() => setOPenMenu(true)}
            ref={menuRef}
            className="relative text-right hover:cursor-pointer inline-block py-1 px-1 hover:bg-slate-400/50 hover:dark:bg-slate-900/30 rounded-md"
        >
            <div className="tracking-tighter txt-3xl leading-3 text-slate-950 dark:text-white">
                {MenuOpen ? (
                    <MoreVert color="inherit" fontSize="inherit" />
                ) : (
                    <Cancel color="inherit" fontSize="inherit" />
                )}
            </div>
            <div
                className={`${
                    openMenu
                        ? "h-fit opacity-100 top-0 z-[50]"
                        : "opacity-0 -top-2"
                } absolute  right-5 w-fit bg-slate-200/59 py-1 px-1.5 dark:bg-slate-900 shadow shadow-slate-50 dark:shadow-boxdark border border-gray dark:border-boxdark rounded-md bg-white usetransition overflow-hidden   text-left text-slate-950 dark:text-white`}
            >
                {children}
            </div>
        </div>
    );
}

function link({ children, ...props }) {
    return (
        <Link
            {...props}
            as="button"
            className="hover:text-slate-800 dark:hover:text-slate-400 block w-full rounded-md hover:bg-slate-200/50 hover:dark:bg-slate-800/50 usetransition py-1 px-3"
        >
            {children}
        </Link>
    );
}
Table.td = td;
Table.tr = tr;
Table.tbody = tbody;
Table.menu = menu;
Table.link = link;
Table.th = th;
Table.thead = thead;

export default Table;
