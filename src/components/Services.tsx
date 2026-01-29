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
        <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-semibold text-sm mb-6"
                    >
                        Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Where waiting <br />
                        <span className="text-[var(--color-primary)]">gets smarter</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
                    >
                        Discover and book from hundreds of verified service providers
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`} />
                            <div className="relative p-8 rounded-3xl border-2 border-gray-100 bg-white hover:border-transparent hover:shadow-2xl transition-all text-center cursor-pointer overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`} />
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className={`relative w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${cat.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-300`}
                                >
                                    <cat.icon size={36} />
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{cat.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 relative z-10">{cat.description}</p>

                                <div className="inline-block px-4 py-2 bg-gray-50 group-hover:bg-gray-100 text-gray-700 text-xs font-bold rounded-full transition-all relative z-10">
                                    {cat.count}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-10 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-emerald-500/20"
                    >
                        Browse All Services
                        <ArrowRight size={20} />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
