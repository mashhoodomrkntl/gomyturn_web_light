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
        <section id="how-it-works" className="section-padding bg-slate-50/50 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-xl bg-white shadow-premium border border-emerald-100 text-emerald-600 font-bold text-[10px] uppercase tracking-widest mb-6"
                    >
                        Easy Setup
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
                    >
                        Reclaim your time in <br />
                        <span className="text-gradient">four simple steps.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg font-medium leading-relaxed"
                    >
                        We've optimized every touchpoint to make sure your turn-taking experience is as smooth as possible.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative">
                    {/* Connecting Arrows (Desktop) */}
                    <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-px bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative group bg-white p-10 rounded-[2.5rem] shadow-premium hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100/50 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="relative z-10 mb-10">
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg shadow-emerald-500/10 flex items-center justify-center text-white relative group-hover:rotate-6 transition-transform duration-500`}>
                                    <step.icon size={36} />
                                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-900 text-white font-black flex items-center justify-center text-xs border-4 border-white shadow-lg">
                                        {step.number}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-none group-hover:text-emerald-600 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
