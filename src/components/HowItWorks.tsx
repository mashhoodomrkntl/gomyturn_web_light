'use client';

import { motion } from 'framer-motion';
import { Search, CalendarDays, BellRing, Sparkles } from 'lucide-react';

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Search Services",
        description: "Find verified local service providers in your area.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        number: "02",
        icon: CalendarDays,
        title: "Choose Your Slot",
        description: "Pick a date and time that fits your day perfectly.",
        color: "from-emerald-500 to-teal-500"
    },
    {
        number: "03",
        icon: BellRing,
        title: "Get Your Turn",
        description: "Know your token number and estimated arrival time instantly.",
        color: "from-amber-500 to-orange-500"
    },
    {
        number: "04",
        icon: Sparkles,
        title: "Arrive On Time",
        description: "Skip the lines. Get served smoothly right when it's your turn.",
        color: "from-purple-500 to-pink-500"
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 font-semibold text-sm mb-6"
                    >
                        How It Works
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Skip the wait, <br />
                        <span className="text-[var(--color-primary)]">not your turn</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
                    >
                        Four simple steps to reclaim your time
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[3.5rem] left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-emerald-200 via-amber-200 to-purple-200 -z-10 rounded-full" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                                className="relative text-center group"
                            >
                                <div className="relative inline-block mb-8">
                                    <motion.div
                                        whileHover={{ scale: 1.15, rotate: 10 }}
                                        className={`w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl flex items-center justify-center text-white transition-all duration-300 relative`}
                                    >
                                        <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                                        <step.icon size={40} className="relative z-10" />
                                    </motion.div>
                                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gray-900 text-white font-bold flex items-center justify-center shadow-lg text-sm border-4 border-white">
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
