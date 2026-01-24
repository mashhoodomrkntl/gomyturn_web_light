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
        <section id="features" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-sm mb-6"
                    >
                        Why Choose Us
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        Built for modern businesses
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
                    >
                        Everything you need to eliminate waiting and serve customers better
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                            <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all h-full">
                                <motion.div
                                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20"
                                >
                                    <feature.icon size={28} />
                                </motion.div>
                                <h3 className="text-white font-bold text-lg leading-tight text-center">
                                    {feature.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
