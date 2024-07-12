"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="py-6 text-dark-green md:py-10">
            <div className="container flex items-center justify-between gap-x-4">
                <div>
                    <h1 className="font-bold leading-tight drop-shadow-lg">
                        The Higher Purpose Foundation
                    </h1>
                </div>
                <MainNavigationWrapper />
            </div>
        </header>
    );
}

export function MainNavigationWrapper() {
    const [open, setOpen] = useState(false);
    const navLinks = [
        ["Past Projects", ""],
        ["About Us", ""],
        ["Our Mission", ""],
    ];

    return (
        <div className="leading-[0]">
            <button
                aria-label={open ? "Close main menu" : "Open main menu"}
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="relative z-50 leading-[0] md:hidden"
            >
                <Image
                    src={open ? "/menu-close.svg" : "/menu.svg"}
                    alt=""
                    width="60"
                    height="60"
                    className="aspect-square w-12"
                />
            </button>
            {open && (
                <div className="fixed inset-0 z-10 bg-black bg-opacity-20 md:hidden" />
            )}
            <div
                className={`${open ? "flex" : "hidden"} fixed bottom-0 left-[30vw] right-0 top-0 z-40 flex-col flex-wrap justify-between whitespace-nowrap bg-white px-6 pb-6 pt-16 leading-normal md:static md:flex md:flex-row md:items-center md:justify-end md:gap-x-4 md:gap-y-1.5 md:p-0 lg:gap-x-14`}
            >
                <nav>
                    <ul className="gap-x-5 space-y-2 md:flex md:space-y-0">
                        {navLinks.map(([label, href]) => {
                            return (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="relative before:absolute before:top-[108%] before:block before:h-0.5 before:w-0 before:bg-dark-green before:transition-all before:content-[''] hover:before:w-full"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex flex-col gap-2 md:grow md:gap-x-3 md:flex-row md:justify-end">
                    <Link
                        href="https://www.instagram.com/a.higherpurpose.foundation/"
                        className="relative block w-full rounded-md bg-dark-green px-2 py-1 text-center font-bold text-white md:w-max"
                    >
                        Join Us!
                    </Link>
                    <Link
                        href="https://www.instagram.com/a.higherpurpose.foundation/"
                        className="relative block w-full rounded-md bg-dark-green px-2 py-1 text-center text-white md:w-max"
                    >
                        Donate
                    </Link>
                </div>
            </div>
        </div>
    );
}
