'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, Shield, Star } from 'lucide-react';

const features = [
    {
        icon: Clock,
        title: "Wait less. Move smarter.",
        delay: 0
    },
    {
        icon: Zap,
        title: "No lines. Just turns.",
        delay: 0.1
    },
    {
        icon: Shield,
        title: "Your turn, without the wait.",
        delay: 0.2
    },
    {
        icon: Star,
        title: "Because your turn matters.",
        delay: 0.3
    }
];

export default function Features() {
    return (
        <section id="features" className="section-padding bg-slate-900 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] uppercase tracking-widest mb-6"
                    >
                        Why Choose Us
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
                    >
                        Everything you need to <br />
                        <span className="text-emerald-400">eliminate waiting.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-400 text-lg font-medium leading-relaxed"
                    >
                        Our platform is designed for businesses that value their customers' time and want to streamline operation.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="relative p-10 rounded-[2.5rem] bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 h-full backdrop-blur-sm">
                                <motion.div
                                    whileHover={{ rotate: 12, scale: 1.1 }}
                                    className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 mb-8"
                                >
                                    <feature.icon size={30} />
                                </motion.div>
                                <h3 className="text-xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-emerald-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                    Maximize efficiency while providing an exceptional experience for your visitors.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
