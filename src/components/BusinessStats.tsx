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
        <section className="section-padding bg-slate-900 overflow-hidden relative">
            {/* Massive Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase tracking-widest mb-8">
                            For Organizations
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
                            Smarter queues for <br />
                            <span className="text-emerald-400 text-gradient from-emerald-400 to-indigo-400">modern businesses.</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed">
                            Serve customers better — without chaos. Manage appointments, walk-ins, and live queues from one beautiful dashboard.
                        </p>

                        <div className="space-y-8 mb-12">
                            {[
                                { title: "1. Register Organization", desc: "Create your profile in 2 mins." },
                                { title: "2. Add Services", desc: "Set your schedule and slots." },
                                { title: "3. Manage Queues", desc: "Live dashboard for checking in." }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                                        <CheckCircle2 className="text-emerald-500 group-hover:text-white" size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-black text-white tracking-tight">{step.title}</h4>
                                        <p className="text-slate-400 font-medium text-sm">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                        >
                            Register Your Business Now
                        </motion.button>
                    </motion.div>

                    {/* Right Stats Grid */}
                    <div className="grid grid-cols-2 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                                className="group relative"
                            >
                                <div className="p-10 rounded-[2.5rem] bg-slate-800/40 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 backdrop-blur-sm h-full">
                                    <stat.icon className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                                    <div className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter">{stat.value}</div>
                                    <div className="text-slate-400 font-black uppercase text-[10px] tracking-widest">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
