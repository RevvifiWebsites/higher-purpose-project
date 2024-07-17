"use client";

import { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import useMedia from "@/custom-hooks/useMedia";

export default function Header() {
    return (
        <header className="relative z-50 bg-green py-4 text-white">
            <div className="container flex items-center justify-between gap-x-8">
                <div>
                    <h1 className="font-bold leading-tight drop-shadow-lg">
                        Higher Purpose Foundation
                    </h1>
                </div>
                <MainNavigation />
            </div>
        </header>
    );
}

const list = {
    hidden: {
        bottom: "100%",
        paddingTop: "0",
        transition: {
            when: "afterChildren",
            staggerChildren: 0.05,
        },
    },
    visible: {
        bottom: "0%",
        paddingTop: "17vh",
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
        },
    },
} as const;

const item = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
} as const;

export function MainNavigation() {
    const [open, setOpen] = useState(false);
    const navLinks = [
        ["About Us", ""],
        ["Past Projects", "/past-projects"],
        ["Our Mission", ""],
        ["Core Members", ""],
        ["Join Us", "https://www.instagram.com/a.higherpurpose.foundation/"],
        ["Donate", ""],
    ];

    const isDesktop = useMedia("(min-width: 1024px)");

    return (
        <nav className="leading-[0]">
            <button
                aria-label={open ? "Close main menu" : "Open main menu"}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls="main-navigation"
                onClick={() => setOpen(!open)}
                className="relative z-50 lg:hidden"
            >
                <div className="relative aspect-[4/3] w-6">
                    <motion.div
                        className="absolute inset-x-0 top-0 h-0.5 w-full bg-white"
                        style={{ transformOrigin: "top left" }}
                        animate={{
                            transform: open ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                    />
                    <motion.div
                        className="absolute inset-x-0 bottom-0 h-0.5 w-full bg-white"
                        style={{ transformOrigin: "bottom left" }}
                        animate={{
                            transform: open ? "rotate(-45deg)" : "rotate(0deg)",
                        }}
                    />
                </div>
            </button>
            <motion.ul
                className="fixed inset-0 -z-40 flex flex-col overflow-hidden whitespace-nowrap bg-green px-6 leading-normal text-white lg:static lg:z-10 lg:flex-row lg:gap-x-4 lg:overflow-visible lg:px-0"
                variants={!isDesktop ? list : undefined}
                aria-hidden={!open && !isDesktop}
                initial="hidden"
                style={
                    isDesktop
                        ? {
                              paddingTop: 0,
                          }
                        : undefined
                }
                animate={open ? "visible" : "hidden"}
                id="main-navigation"
                inert={!open && !isDesktop ? 'true' as any as boolean : undefined}
            >
                {navLinks.map(([label, href]) => {
                    return (
                        <motion.li
                            key={label}
                            variants={!isDesktop ? item : undefined}
                            style={
                                isDesktop
                                    ? {
                                          opacity: 1,
                                      }
                                    : undefined
                            }
                            className="border-white py-2 text-center lg:relative lg:text-left [&+&]:border-t lg:[&+&]:border-t-0"
                        >
                            <Link
                                href={href}
                                className="lg:before:absolute lg:before:top-[80%] lg:before:block lg:before:h-0.5 lg:before:w-0 lg:before:bg-white lg:before:transition-all lg:before:content-[''] lg:hover:before:w-full"
                            >
                                {label}
                            </Link>
                        </motion.li>
                    );
                })}
            </motion.ul>
        </nav>
    );
}
