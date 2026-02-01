'use client';

import { motion } from 'framer-motion';
import { Stethoscope, Scissors, Car, Building2, ArrowRight } from 'lucide-react';

const categories = [
    {
        icon: Building2,
        title: "Gynecology",
        description: "Expert care for women's health.",
        count: "120+ providers",
        gradient: "from-red-500 to-pink-500"
    },
    {
        icon: Stethoscope,
        title: "Neurology",
        description: "Advanced neurological treatments.",
        count: "80+ providers",
        gradient: "from-purple-500 to-indigo-500"
    },
    {
        icon: Car,
        title: "Car Wash",
        description: "Premium cleaning & detailing.",
        count: "250+ providers",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Scissors,
        title: "Beauty & Spa",
        description: "Relaxing treatments & styling.",
        count: "300+ providers",
        gradient: "from-emerald-500 to-teal-500"
    }
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-xl bg-white shadow-premium border border-emerald-100 text-emerald-600 font-bold text-[10px] uppercase tracking-widest mb-6"
                    >
                        Categories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
                    >
                        Where waiting <br />
                        <span className="text-gradient">gets smarter.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg font-medium leading-relaxed"
                    >
                        Join hundreds of local providers who use GoMyTurn to offer a modern, wait-free experience.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            <div className="relative p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-emerald-200 hover:shadow-premium transition-all duration-500 cursor-pointer overflow-hidden">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-white shadow-lg mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                    <cat.icon size={30} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">{cat.title}</h3>
                                <p className="text-slate-500 font-medium text-sm mb-8 leading-relaxed">{cat.description}</p>

                                <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    {cat.count}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        Browse All Categories
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
