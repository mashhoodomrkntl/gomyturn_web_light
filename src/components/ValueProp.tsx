'use client';

import { motion } from 'framer-motion';
import { Calendar, Bell, Users, ShieldCheck } from 'lucide-react';

const values = [
    {
        icon: Calendar,
        title: "Your turn, without the wait",
        description: "Get a specific time. Show up then. Not a minute sooner."
    },
    {
        icon: Bell,
        title: "Time saved. Stress removed",
        description: "Knowing your number means you can relax until it's time."
    },
    {
        icon: Users,
        title: "Skip the wait, not your turn",
        description: "Keep your place in line while you do life."
    },
    {
        icon: ShieldCheck,
        title: "Because your turn matters",
        description: "We believe your time is as valuable as the service."
    }
];

export default function ValueProp() {
    return (
        <section className="section-padding bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-xl bg-white shadow-premium border border-emerald-100 text-emerald-600 font-bold text-[10px] uppercase tracking-widest mb-6"
                    >
                        The Problem we solve
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
                    >
                        Your time <br />
                        <span className="text-gradient">deserves better.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-500 text-lg font-medium leading-relaxed"
                    >
                        Waiting steals time. Uncertainty creates stress. Crowded queues waste energy. GoMyTurn fixes that with real-time transparency.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group"
                        >
                            <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-premium hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 h-full">
                                <motion.div
                                    whileHover={{ rotate: -15, scale: 1.1 }}
                                    className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500"
                                >
                                    <item.icon size={30} />
                                </motion.div>
                                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
