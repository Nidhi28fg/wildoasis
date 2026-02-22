import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiShieldCheck, HiStar, HiSun } from "react-icons/hi2";

export default function HomePage() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center pt-20 px-4 md:px-0">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                        alt="Mountains"
                        fill
                        className="object-cover brightness-[0.6] dark:brightness-[0.4]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-gray-950" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 md:mb-8 border border-white/20 animate-fade-in">
                        Luxury Boutique Hotel
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.2] md:leading-[1.1] max-w-4xl mx-auto">
                        Escape to the Heart of the <span className="text-indigo-400 italic">Wilderness</span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-200 mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Discover a unique blend of untamed nature and modern luxury at our secluded boutique resort. Your sanctuary awaits.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                        <Link
                            href="/explore"
                            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:bg-indigo-700 hover:gap-5 shadow-2xl shadow-indigo-500/30 text-sm md:text-base"
                        >
                            Explore Our Cabins <HiArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/about"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all text-sm md:text-base flex items-center justify-center"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Why Choose The Wild Oasis?
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Everything you need for a perfect getaway, meticulously designed to ensure comfort and inspiration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                        <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <HiShieldCheck className="w-7 h-7 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Ultimate Privacy</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Our cabins represent the pinnacle of seclusion, spaced perfectly to ensure your peace and quiet.
                        </p>
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                        <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <HiSun className="w-7 h-7 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Stunning Views</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Wake up to breathtaking panoramic views of the mountains and valleys right from your bedside.
                        </p>
                    </div>

                    <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                        <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <HiStar className="w-7 h-7 text-rose-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">5-Star Amenities</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            From heated floors to private wine cellars, every cabin is stocked with premium amenities for your stay.
                        </p>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="pb-32 container mx-auto px-6">
                <div className="relative rounded-[3rem] overflow-hidden bg-indigo-950 px-8 py-24 md:px-24 text-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1449156001404-5867cdb3f71c"
                            alt="Cabin night"
                            fill
                            className="object-cover opacity-30"
                        />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready for an adventure?</h2>
                        <p className="text-indigo-200 mb-12 max-w-xl mx-auto">
                            Book your stay today and experience the magic of the wild oasis. Your perfect getaway is just a few clicks away.
                        </p>
                        <Link
                            href="/explore"
                            className="px-10 py-5 bg-white text-indigo-950 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-2xl"
                        >
                            Start Your Journey
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
