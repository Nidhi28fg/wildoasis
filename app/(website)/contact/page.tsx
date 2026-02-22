"use client";
import React from "react";
import Image from "next/image";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const ContactPage = () => {
    return (
        <div className="bg-slate-50 dark:bg-gray-950 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20 text-balance px-4 animate-fade-in">
                    <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                        Contact Us
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                        Let's Start a <span className="text-indigo-600">Conversation</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        Have questions about our cabins, services, or planning a special event? Our team is here to help you design your perfect wilderness experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {/* Contact Information Card */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-10">Get in touch</h3>

                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-all duration-300">
                                        <HiOutlineEnvelope className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-1">Email</p>
                                        <p className="text-gray-800 dark:text-gray-200 font-bold">hello@wildoasis.com</p>
                                        <p className="text-sm text-gray-500">Expect a reply within 2 hours</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-amber-600 transition-all duration-300">
                                        <HiOutlinePhone className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">Phone</p>
                                        <p className="text-gray-800 dark:text-gray-200 font-bold">+1 (555) 000-0000</p>
                                        <p className="text-sm text-gray-500">Mon-Sun, 8am - 10pm</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-all duration-300">
                                        <HiOutlineMapPin className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-1">Location</p>
                                        <p className="text-gray-800 dark:text-gray-200 font-bold">The Wild Oasis Resort</p>
                                        <p className="text-sm text-gray-500">San Francisco, CA 94103</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Support Box */}
                        <div className="bg-indigo-600 p-8 rounded-[2.5rem] text-white overflow-hidden relative group">
                            <div className="absolute -right-20 -top-20 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                            <HiOutlineChatBubbleLeftRight className="w-12 h-12 mb-6 opacity-80" />
                            <h4 className="text-2xl font-bold mb-4 leading-tight">Need immediate assistance?</h4>
                            <p className="text-indigo-100 mb-8 max-w-xs">Our reservation specialists are online and ready to help you plan your stay.</p>
                            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-slate-50 transition-all">Live Chat Now</button>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-900 p-10 md:p-14 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none h-full flex flex-col">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send us a message</h3>
                            <p className="text-gray-500 mb-12">Fill out the form below and we'll get back to you as soon as possible.</p>

                            <form className="space-y-8 flex-grow">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Reservation Support</option>
                                        <option>Special Events & Weddings</option>
                                        <option>Business Partnership</option>
                                        <option>Others</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="How can we help you?"
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-indigo-600 outline-none transition-all dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-6 bg-gray-900 dark:bg-indigo-600 text-white rounded-[2rem] font-bold text-xl hover:bg-gray-800 dark:hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 active:scale-[0.98]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
