"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Logo from "@/components/Logo";
import DarkModeToggle from "@/components/DarkModeToggle";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Our Cabins", href: "/explore" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMenuOpen
                    ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-[110]">
                    <div className="shrink-0">
                        <Logo width={40} height={28} />
                    </div>
                    <span className="text-lg md:text-xl font-bold tracking-tight text-gray-800 dark:text-white truncate max-w-[150px] sm:max-w-none">
                        The Wild Oasis
                    </span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${pathname === link.href
                                    ? "text-indigo-600 dark:text-indigo-400"
                                    : "text-gray-600 dark:text-gray-300"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2 md:gap-4">
                    <DarkModeToggle />

                    <Link
                        href="/explore"
                        className="hidden xs:inline-flex sm:inline-flex px-4 py-2 md:px-5 md:py-2.5 bg-indigo-600 text-white rounded-full text-xs md:text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md whitespace-nowrap"
                    >
                        Book Now
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 dark:text-gray-300 z-[110]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <HiXMark className="w-7 h-7" /> : <HiBars3 className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white dark:bg-gray-950 z-[105] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center gap-8 px-6 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-3xl font-bold tracking-tight transition-all ${pathname === link.href ? "text-indigo-600" : "text-gray-800 dark:text-gray-300"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="h-px w-24 bg-gray-100 dark:bg-gray-800 my-4" />

                    <Link
                        href="/login"
                        className="text-lg font-medium text-gray-500 dark:text-gray-400"
                    >
                        Admin Login
                    </Link>

                    <Link
                        href="/explore"
                        className="mt-4 px-10 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-xl active:scale-95"
                    >
                        Book Your Stay
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
