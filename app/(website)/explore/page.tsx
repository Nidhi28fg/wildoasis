"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiUsers, HiOutlineCurrencyDollar, HiOutlineWifi } from "react-icons/hi2";
import { useCabins } from "@/features/cabins/hooks/useCabins";
import { formatCurrency } from "@/utils/helpers";
import { Loader } from "@/components/Loader";

const ExploreCabinsPage = () => {
    const { cabins, isLoading } = useCabins();

    if (isLoading) return (
        <div className="h-screen flex items-center justify-center">
            <Loader />
        </div>
    );

    return (
        <div className="pt-32 pb-24 bg-slate-50 dark:bg-gray-950 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Luxury Collection
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Discover Our Cabins
                        </h1>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md">
                        Meticulously designed spaces that merge luxury with the raw beauty of the mountains. Find your perfect hideaway.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cabins?.map((cabin: any) => (
                        <div
                            key={cabin.id}
                            className="group relative bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={cabin.image}
                                    alt={cabin.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 right-6">
                                    <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-gray-800 dark:text-white border border-white/20">
                                        {cabin.maxCapacity} Guests
                                    </span>
                                </div>
                            </div>

                            {/* Content Panel */}
                            <div className="p-10">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{cabin.name}</h3>
                                    <div className="flex items-center gap-1 text-amber-500">
                                        <span className="text-sm font-bold">4.9</span>
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    </div>
                                </div>

                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 line-clamp-2 leading-relaxed">
                                    {cabin.description}
                                </p>

                                <div className="flex items-center gap-6 mb-10 pb-1 border-b border-gray-50 dark:border-gray-800">
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <HiUsers className="w-4 h-4" />
                                        <span className="text-xs uppercase font-bold tracking-wider">{cabin.maxCapacity} Guests</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <HiOutlineWifi className="w-4 h-4" />
                                        <span className="text-xs uppercase font-bold tracking-wider">Free Wifi</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div>
                                        <span className="text-gray-400 text-xs block mb-1 uppercase font-bold tracking-tighter">Price per night</span>
                                        <div className="flex items-baseline gap-1">
                                            {cabin.discount > 0 ? (
                                                <>
                                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(cabin.regularPrice - cabin.discount)}</span>
                                                    <span className="text-gray-400 line-through text-sm">{formatCurrency(cabin.regularPrice)}</span>
                                                </>
                                            ) : (
                                                <span className="text-2xl font-bold text-gray-900 dark:text-white">{formatCurrency(cabin.regularPrice)}</span>
                                            )}
                                        </div>
                                    </div>

                                    <Link
                                        href={`/book/${cabin.id}`}
                                        className="p-4 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-400 dark:hover:text-white transition-all shadow-lg group-hover:px-6"
                                    >
                                        Check Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExploreCabinsPage;
