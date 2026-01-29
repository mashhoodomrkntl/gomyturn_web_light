'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Stethoscope } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 text-emerald-800 font-medium text-sm">
                            <Zap size={16} fill="currentColor" />
                            <span>Your time. Your turn.</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900">
                            Smarter Turn-taking <br />
                            <span className="text-[var(--color-primary)]">on time, every time</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                            Smarter turn-taking for everyday services. Book ahead, get your turn number, and arrive exactly when it matters. No lines. No crowding. Just turns — on time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
                            >
                                Book Your Turn
                                <ArrowRight size={20} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-sm hover:shadow-md"
                            >
                                How it works
                            </motion.button>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-4 text-gray-600 font-medium text-sm">
                            {['No waiting in lines', 'Know your token', '100% Free'].map((text, i) => (
                                <motion.div
                                    key={text}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                    className="flex items-center gap-2"
                                >
                                    <CheckCircle2 size={18} className="text-[var(--color-primary)]" />
                                    <span>{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 left-0 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 max-w-[240px]"
                        >
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <Zap size={20} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">Average Wait Time</p>
                                <p className="text-lg font-bold text-gray-900">-45 min saved</p>
                            </div>
                        </motion.div>

                        {/* Main Card */}
                        <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl space-y-6 relative border border-gray-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Booking</p>
                                    <h3 className="text-xl font-bold text-gray-900">Dr. Sarah's Clinic</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-[var(--color-primary)]">
                                    <Stethoscope size={24} />
                                </div>
                            </div>

                            {/* Green Ticket Card */}
                            <div className="bg-[var(--color-primary)] rounded-3xl p-6 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />

                                <div className="flex justify-between items-end mb-8 relative z-10">
                                    <div>
                                        <p className="text-emerald-100 text-sm mb-1">Your Token</p>
                                        <p className="text-5xl font-bold">#07</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-emerald-100 text-sm mb-1">Estimated Time</p>
                                        <p className="text-2xl font-bold">10:30 AM</p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center border-t border-white/20 pt-4 relative z-10">
                                    <span className="font-medium">Currently Serving</span>
                                    <span className="font-bold text-xl">#04</span>
                                </div>
                            </div>

                            {/* Bottom Notification */}
                            <div className="bg-amber-50 rounded-2xl p-4 flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 bg-amber-600 rounded-full absolute animate-ping" />
                                    <div className="w-2 h-2 bg-amber-600 rounded-full relative" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">3 people ahead of you</p>
                                    <p className="text-xs text-gray-500">We'll notify you when it's almost your turn</p>
                                </div>
                            </div>

                            {/* Happy Users */}
                            <div className="absolute -bottom-6 -right-6 bg-white py-3 px-5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-emerald-200 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white"></div>
                                </div>
                                <span className="text-sm font-bold text-gray-700">+2.5k happy users</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
