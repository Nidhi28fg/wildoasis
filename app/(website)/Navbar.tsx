"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import DarkModeToggle from "@/components/DarkModeToggle";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Our Cabins", href: "/explore" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-lg py-3}`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Logo width={45} height={32} />
                    <span className="text-xl font-bold tracking-tight text-gray-800 dark:text-white hidden sm:block">
                        The Wild Oasis
                    </span>
                </Link>

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

                <div className="flex items-center gap-4">
                    <DarkModeToggle />
                    <Link
                        href="/login"
                        className="hidden sm:block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
                    >
                        Admin Login
                    </Link>
                    <Link
                        href="/explore"
                        className="px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-md"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
