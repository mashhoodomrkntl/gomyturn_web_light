'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Play, Calendar, CheckCircle2 } from 'lucide-react';

export default function GetDemo() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">See GoMyTurn in action</h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Discover how our smart queue management system can transform your business
                                and delight your customers. Get a personal walkthrough of the dashboard
                                and mobile booking experience.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Live dashboard walkthrough",
                                    "Customer booking flow demo",
                                    "Analytics and reporting overview",
                                    "Custom setup consultation"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-emerald-500" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 bg-emerald-600 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl shadow-emerald-200"
                            >
                                <Calendar size={20} />
                                Schedule a 1-on-1 Demo
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-video bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-2xl group-hover:scale-110 transition-transform">
                                    <Play size={40} fill="currentColor" className="ml-2" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-sm font-medium opacity-80">Demo Video</p>
                                <p className="text-xl font-bold">Introduction to GoMyTurn</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
