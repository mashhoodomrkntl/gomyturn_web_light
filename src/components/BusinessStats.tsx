'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react';

const stats = [
    { value: "2.5K+", label: "Service Providers", icon: Users },
    { value: "50K+", label: "Bookings/Month", icon: TrendingUp },
    { value: "98%", label: "Satisfaction Rate", icon: Award },
    { value: "45min", label: "Avg. Time Saved", icon: Clock }
];

const features = [
    "Register your organization in minutes",
    "Add unlimited services and time slots",
    "Let customers book online 24/7",
    "Manage reservations and queues efficiently",
    "Get analytics and insights"
];

export default function BusinessStats() {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-sm mb-8">
                            For Businesses
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            List your services in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">GoMyTurn</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
                            Join thousands of service providers who've transformed their queue management.
                            Simple setup, powerful results.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-gray-300"
                                >
                                    <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={22} />
                                    <span className="text-base">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
                        >
                            Register Your Business
                            <ArrowRight size={20} />
                        </motion.button>
                    </motion.div>

                    {/* Right Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                                <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all cursor-pointer">
                                    <stat.icon className="w-8 h-8 text-emerald-400 mb-4" />
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
