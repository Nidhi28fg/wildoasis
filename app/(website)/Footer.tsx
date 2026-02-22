import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Logo width={40} height={28} />
                            <span className="text-lg font-bold text-gray-800 dark:text-white">
                                The Wild Oasis
                            </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Experience the tranquility of nature in our curated selection of
                            luxury cabins. A home away from home, nestled in the heart of the wild.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-white mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/explore" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors">Our Cabins</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors">About Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-white mb-6">
                            Legal
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/privacy" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800 dark:text-white mb-6">
                            Newsletter
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                            Subscribe to get latest updates and offers.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg px-4 py-2 text-sm w-full outline-none focus:border-indigo-500 transition-colors"
                            />
                            <button className="bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} The Wild Oasis. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-gray-400 text-xs hover:text-indigo-600 transition-colors cursor-pointer">Instagram</span>
                        <span className="text-gray-400 text-xs hover:text-indigo-600 transition-colors cursor-pointer">Twitter</span>
                        <span className="text-gray-400 text-xs hover:text-indigo-600 transition-colors cursor-pointer">Facebook</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
