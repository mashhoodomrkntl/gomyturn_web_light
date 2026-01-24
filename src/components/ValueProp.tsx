'use client';

import { motion } from 'framer-motion';
import { Calendar, Bell, Users, ShieldCheck } from 'lucide-react';

const values = [
    {
        icon: Calendar,
        title: "Book Ahead",
        description: "Reserve your spot in advance. Know exactly when to arrive without standing in queues."
    },
    {
        icon: Bell,
        title: "Real-time Updates",
        description: "Get instant notifications as your turn approaches. Never miss your slot."
    },
    {
        icon: Users,
        title: "Smart Queue Management",
        description: "Service providers can manage bookings efficiently with our intelligent system."
    },
    {
        icon: ShieldCheck,
        title: "Verified Services",
        description: "All service providers are verified. Book with confidence every time."
    }
];

export default function ValueProp() {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-semibold text-sm mb-6"
                    >
                        Features
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6"
                    >
                        Smarter queues for <br />
                        <span className="text-[var(--color-primary)]">modern businesses</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-base md:text-lg leading-relaxed"
                    >
                        Turn management, reimagined. Everything you need to save time and serve better.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                            <div className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 group-hover:shadow-2xl group-hover:shadow-emerald-500/10 group-hover:border-emerald-200 transition-all cursor-pointer h-full">
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-[var(--color-primary)] flex items-center justify-center mb-6 group-hover:from-emerald-100 group-hover:to-emerald-200 transition-all"
                                >
                                    <item.icon size={32} />
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
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
