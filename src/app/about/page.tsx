'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About GoMyTurn</h1>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Waiting steals time. Uncertainty creates stress. Crowded queues waste energy.
                            GoMyTurn was built to fix that. We believe your time is as valuable as the service you receive.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our mission is to eliminate waiting in lines globally. By providing a smart,
                                real-time queue management system, we help businesses serve their customers
                                better and help people reclaim their most valuable asset: time.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Eliminate physical queues",
                                    "Provide real-time transparency",
                                    "Enhance customer experience",
                                    "Optimize business efficiency"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-emerald-50 p-12 rounded-[3rem] border border-emerald-100"
                        >
                            <div className="text-center">
                                <p className="text-5xl font-bold text-emerald-600 mb-2">50K+</p>
                                <p className="text-emerald-800 font-medium">Monthly Bookings</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 mt-12 text-center">
                                <div>
                                    <p className="text-3xl font-bold text-emerald-600">2.5K+</p>
                                    <p className="text-sm text-emerald-700">Providers</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-emerald-600">98%</p>
                                    <p className="text-sm text-emerald-700">Satisfaction</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
