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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMenuOpen
                ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-50">
                    <Logo width={45} height={32} />
                    <span className="text-xl font-bold tracking-tight text-gray-800 dark:text-white">
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
                        href="/login"
                        className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                    >
                        Admin Login
                    </Link>
                    <Link
                        href="/explore"
                        className="hidden xs:block px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-md"
                    >
                        Book Now
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 dark:text-gray-300 z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <HiXMark className="w-7 h-7" /> : <HiBars3 className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white dark:bg-gray-950 z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-2xl font-bold tracking-tight transition-all ${pathname === link.href ? "text-indigo-600" : "text-gray-800 dark:text-gray-300"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/login"
                        className="text-lg font-medium text-gray-500 dark:text-gray-400 mt-4"
                    >
                        Admin Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
