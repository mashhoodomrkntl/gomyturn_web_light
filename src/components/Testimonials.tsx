'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex justify-center gap-1.5 mb-10"
                    >
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
                        ))}
                    </motion.div>

                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-16 tracking-tight"
                    >
                        "GoMyTurn has completely changed how I manage my clinic.
                        My patients love knowing exactly when to arrive.
                        <span className="text-emerald-600"> Time saved, stress removed.</span>"
                    </motion.blockquote>

                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-24 h-24 rounded-full bg-slate-100 mb-6 border-4 border-white shadow-premium overflow-hidden flex items-center justify-center text-4xl"
                        >
                            👨‍⚕️
                        </motion.div>
                        <h4 className="text-xl font-bold text-slate-900">Dr. Rajesh Kumar</h4>
                        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">General Physician, Mumbai</p>
                        <div className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-100">
                            Verified Provider • 2,500+ Appointments
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
