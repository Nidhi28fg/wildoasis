import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <Logo width={40} height={28} />
                            <span className="text-xl font-bold text-gray-800 dark:text-white">
                                The Wild Oasis
                            </span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                            Experience the tranquility of nature in our curated selection of
                            luxury cabins. A home away from home, nestled in the heart of the wild.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8">
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors font-medium">Home</Link>
                            </li>
                            <li>
                                <Link href="/explore" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors font-medium">Our Cabins</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors font-medium">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors font-medium">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8">
                            Legal
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/privacy" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors font-medium">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 text-sm transition-colors font-medium">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-4">
                            Newsletter
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                            Subscribe for exclusive offers and mountain updates.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm w-full outline-none focus:ring-2 focus:ring-indigo-500 transition-all dark:text-white"
                            />
                            <button className="bg-indigo-600 text-white rounded-xl px-4 py-3 text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-400 text-[10px] md:text-xs text-center md:text-left font-medium uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} The Wild Oasis. Crafted with heart in the mountains.
                    </p>
                    <div className="flex items-center gap-8">
                        <span className="text-gray-400 text-xs font-bold hover:text-indigo-600 transition-colors cursor-pointer tracking-widest uppercase">Instagram</span>
                        <span className="text-gray-400 text-xs font-bold hover:text-indigo-600 transition-colors cursor-pointer tracking-widest uppercase">Twitter</span>
                        <span className="text-gray-400 text-xs font-bold hover:text-indigo-600 transition-colors cursor-pointer tracking-widest uppercase">Facebook</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
