"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { HiArrowLeft, HiCalendar, HiUsers, HiInformationCircle } from "react-icons/hi2";
import { useCabin } from "@/features/cabins/hooks/useCabin";
import { useSettings } from "@/features/settings/useSettings";
import { useCreateBooking } from "@/features/bookings/hooks/useCreateBooking";
import { formatCurrency } from "@/utils/helpers";
import { Loader } from "@/components/Loader";
import { differenceInDays, isBefore, startOfToday } from "date-fns";

const BookingPage = () => {
    const { cabinId } = useParams();
    const router = useRouter();
    const { cabin, isLoading: isLoadingCabin } = useCabin(cabinId as string);
    const { settings, isLoading: isLoadingSettings } = useSettings();
    const { createBooking, isCreating } = useCreateBooking();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [numGuests, setNumGuests] = useState(1);
    const [hasBreakfast, setHasBreakfast] = useState(false);
    const [observations, setObservations] = useState("");

    // Guest Info
    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");
    const [nationality, setNationality] = useState("");
    const [country, setCountry] = useState("");
    const [nationalID, setNationalID] = useState("");

    if (isLoadingCabin || isLoadingSettings) return (
        <div className="h-screen flex items-center justify-center">
            <Loader />
        </div>
    );

    if (!cabin) return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Cabin not found</h2>
                <button onClick={() => router.push('/explore')} className="text-indigo-600 font-bold hover:underline">
                    Back to explore
                </button>
            </div>
        </div>
    );

    const numNights = startDate && endDate ? differenceInDays(new Date(endDate), new Date(startDate)) : 0;
    const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
    const extrasPrice = hasBreakfast ? numNights * numGuests * settings.breakfastPrice : 0;
    const totalPrice = cabinPrice + extrasPrice;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!startDate || !endDate || !guestName || !guestEmail) return;

        if (numNights < settings.minBookingLength) {
            alert(`Minimum stay is ${settings.minBookingLength} nights`);
            return;
        }

        if (numNights > settings.maxBookingLength) {
            alert(`Maximum stay is ${settings.maxBookingLength} nights`);
            return;
        }

        createBooking({
            startDate,
            endDate,
            numNights,
            numGuests,
            cabinPrice,
            extrasPrice,
            totalPrice,
            hasBreakfast,
            observations,
            cabinId,
            guestName,
            guestEmail,
            nationality,
            country,
            nationalID,
        });
    };

    return (
        <div className="pt-32 pb-24 bg-slate-50 dark:bg-gray-950 min-h-screen">
            <div className="container mx-auto px-6 max-w-6xl">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors mb-8 group"
                >
                    <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to cabins</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Booking Summary - Sticky */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-xl sticky top-32">
                            <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Booking Summary</h2>

                            <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                                <Image src={cabin.image} alt={cabin.name} fill className="object-cover" />
                            </div>

                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{cabin.name}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                {cabin.description}
                            </p>

                            <div className="space-y-4 border-t border-gray-50 dark:border-gray-800 pt-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Cabin Price</span>
                                    <span className="font-bold text-gray-900 dark:text-white">{formatCurrency(cabinPrice)}</span>
                                </div>
                                {hasBreakfast && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">Breakfast</span>
                                        <span className="font-bold text-gray-900 dark:text-white">{formatCurrency(extrasPrice)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center pt-4 border-t border-gray-50 dark:border-gray-800">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                                    <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{formatCurrency(totalPrice)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Stay Details */}
                            <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-10 border border-gray-100 dark:border-gray-800 shadow-sm">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                                        <HiCalendar className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Stay Details</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Arrival Date</label>
                                        <input
                                            type="date"
                                            required
                                            min={startOfToday().toISOString().split('T')[0]}
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Departure Date</label>
                                        <input
                                            type="date"
                                            required
                                            min={startDate || startOfToday().toISOString().split('T')[0]}
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Number of Guests</label>
                                        <div className="relative">
                                            <select
                                                value={numGuests}
                                                onChange={(e) => setNumGuests(Number(e.target.value))}
                                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 outline-none appearance-none transition-all dark:text-white"
                                            >
                                                {[...Array(cabin.maxCapacity)].map((_, i) => (
                                                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Guest' : 'Guests'}</option>
                                                ))}
                                            </select>
                                            <HiUsers className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl border border-transparent hover:border-indigo-500/30 transition-all">
                                        <input
                                            type="checkbox"
                                            id="breakfast"
                                            checked={hasBreakfast}
                                            onChange={(e) => setHasBreakfast(e.target.checked)}
                                            className="w-5 h-5 rounded accent-indigo-600"
                                        />
                                        <label htmlFor="breakfast" className="text-sm font-bold text-gray-700 dark:text-gray-300 cursor-pointer">
                                            Add Breakfast ({formatCurrency(settings.breakfastPrice)} / person)
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Guest Information */}
                            <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-10 border border-gray-100 dark:border-gray-800 shadow-sm">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                                        <HiInformationCircle className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Guest Information</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            value={guestName}
                                            onChange={(e) => setGuestName(e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            value={guestEmail}
                                            onChange={(e) => setGuestEmail(e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">National ID</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="A12345678"
                                            value={nationalID}
                                            onChange={(e) => setNationalID(e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Nationality</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="USA"
                                            value={nationality}
                                            onChange={(e) => setNationality(e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Country</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="United States"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Special Observations</label>
                                        <textarea
                                            rows={3}
                                            value={observations}
                                            onChange={(e) => setObservations(e.target.value)}
                                            placeholder="Any special requests or allergies..."
                                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-indigo-500 outline-none transition-all dark:text-white resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isCreating}
                                className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95 disabled:opacity-50"
                            >
                                {isCreating ? 'Processing...' : `Confirm Booking for ${formatCurrency(totalPrice)}`}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
