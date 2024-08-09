import {
    ArrowBack,
    Contacts,
    Settings,
    SpaceDashboard,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import MenuDropdon from "../Menu/MenuDropdon";
import MenuLink from "../Menu/MenuLink";

export default function SidebarDesktop({ open, setOpen, triggerRef }) {
    const sidebarRef = useRef();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        let handler = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        window.addEventListener("mousedown", handler);
        return () => {
            window.removeEventListener("mousedown", handler);
        };
    }, []);
    useEffect(() => {
        let handler = () => {
            setWindowWidth(window.innerWidth);
            if (windowWidth < 600) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handler);

        return () => {
            window.removeEventListener("resize", handler);
        };
    }, []);

    return (
        <div
            ref={sidebarRef}
            className={`${
                open
                    ? "w-[300px] absolute top-0 left-0"
                    : "w-0 md:w-[300px] relative"
            }  overflow-x-hidden usetransition  h-full max-h-full overflow-y-auto bg-white dark:bg-slate-950  scrollbar-thin z-50 `}
        >
            <div className="flex md:hidden gap-3 items-center justify-between py-3 px-3">
                <div className="flex gap-4 items-center">
                    <img
                        src=""
                        alt=""
                        className="w-[45px] h-[45px] object-cover rounded-full"
                    />
                    <h1 className="font-semibold text-xl text-slate-950 dark:text-white">
                        MUDICOM
                    </h1>
                </div>
                <button
                    onClick={() => setOpen(false)}
                    className="font-semibold text-xl text-slate-950 dark:text-white leading-3"
                >
                    <ArrowBack color="inherit" fontSize="inherit" />
                </button>
            </div>
            <div>
                <MenuLink
                    // active={route.current("admin.dashboard")}
                    link={route("admin.dashboard")}
                    title={"Dashboard"}
                    icon={<SpaceDashboard color="inherit" fontSize="inherit" />}
                />
                <MenuDropdon
                    title={"Master Data"}
                    icon={<Settings color="inherit" fontSize="inherit" />}
                >
                    <MenuLink
                        link={route("manage-jabatan")}
                        dropdown={true}
                        title={"Manage Jabatan"}
                        icon={<Contacts color="inherit" fontSize="inherit" />}
                    />
                </MenuDropdon>
            </div>
        </div>
    );
}
