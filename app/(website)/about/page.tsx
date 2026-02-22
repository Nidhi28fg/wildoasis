import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineHeart, HiOutlineSparkles, HiOutlineGlobeAlt } from "react-icons/hi2";

const AboutPage = () => {
    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
                    alt="Beautiful Mountain View"
                    fill
                    className="object-cover brightness-[0.7]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-950" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white dark:text-white tracking-tight mb-6">
                        Soul of the <span className="text-indigo-400">Mountains</span>
                    </h1>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
                        <Image
                            src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
                            alt="Cozy Cabin Interior"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 border-[16px] border-white/10 m-6 rounded-[2rem]" />
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                            A sanctuary where nature meets luxury.
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                            Founded in 1995, The Wild Oasis began with a simple vision: to create a space where travelers could disconnect from the chaos of modern life and reconnect with the raw beauty of mother nature.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                            Every cabin we build is a testament to sustainable luxury. We use locally sourced materials and integrate our structures into the landscape, ensuring minimal impact on the environment while providing maximum comfort for our guests.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center">
                                    <HiOutlineHeart className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white">Made with Love</h3>
                                <p className="text-sm text-gray-500">Every detail is curated to make you feel right at home.</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center">
                                    <HiOutlineSparkles className="w-6 h-6 text-indigo-600" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white">Pure Luxury</h3>
                                <p className="text-sm text-gray-500">Experience world-class amenities in the wild.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Facts Banner */}
            <section className="py-20 bg-indigo-600">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
                        <div className="space-y-2">
                            <p className="text-4xl md:text-5xl font-black">25+</p>
                            <p className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Luxury Cabins</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl md:text-5xl font-black">15k</p>
                            <p className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Happy Guests</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl md:text-5xl font-black">100%</p>
                            <p className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Organic Food</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-4xl md:text-5xl font-black">4.9</p>
                            <p className="text-indigo-200 text-sm font-bold uppercase tracking-widest">Star Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Experience */}
            <section className="py-32 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Designed for Memories</h2>
                    <p className="text-gray-500 dark:text-gray-400">Whether you're looking for a romantic escape or a family adventure, our resort offers a variety of experiences tailored to your desires.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative h-96 group rounded-[2.5rem] overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1544124499-58912cbddaad" alt="Spa" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Wellness & Spa</h3>
                            <p className="text-gray-300 text-sm">Refresh your mind and body with our holistic treatments.</p>
                        </div>
                    </div>
                    <div className="relative h-96 group rounded-[2.5rem] overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3" alt="Dining" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Gourmet Dining</h3>
                            <p className="text-gray-300 text-sm">Farm-to-table excellence with mountain views.</p>
                        </div>
                    </div>
                    <div className="relative h-96 group rounded-[2.5rem] overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1533470192478-9997bef5310d" alt="Hike" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Outdoor Adventure</h3>
                            <p className="text-gray-300 text-sm">Explore the untamed wilderness right at your doorstep.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 container mx-auto px-6">
                <div className="bg-gray-900 dark:bg-indigo-950 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 relative z-10">Start Your Story With Us</h2>
                    <Link
                        href="/explore"
                        className="inline-block px-8 md:px-12 py-4 md:py-5 bg-white text-gray-900 rounded-full font-bold text-base md:text-lg hover:bg-indigo-600 hover:text-white transition-all shadow-2xl relative z-10"
                    >
                        Book Your Stay Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;