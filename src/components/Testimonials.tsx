'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex justify-center gap-2 mb-10">
                        {[1, 2, 3, 4, 5].map((star, i) => (
                            <motion.div
                                key={star}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i, type: "spring" }}
                            >
                                <Star className="w-10 h-10 text-amber-400 fill-amber-400 drop-shadow-lg" />
                            </motion.div>
                        ))}
                    </div>

                    <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-12 relative">
                        <span className="text-6xl text-emerald-500/20 absolute -top-4 -left-4">"</span>
                        GoMyTurn has completely changed how I manage my clinic. My patients love knowing exactly when to arrive.
                        <span className="text-[var(--color-primary)]"> Time saved, stress removed.</span>
                        <span className="text-6xl text-emerald-500/20 absolute -bottom-8 -right-4">"</span>
                    </blockquote>

                    <div className="flex flex-col items-center">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-4xl mb-5 shadow-xl"
                        >
                            👨‍⚕️
                        </motion.div>
                        <div className="font-bold text-xl text-gray-900">Dr. Rajesh Kumar</div>
                        <div className="text-gray-600 mt-1">General Physician, Mumbai</div>
                        <div className="mt-4 inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                            ⭐ 5.0 Rating • 2,500+ Appointments
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
