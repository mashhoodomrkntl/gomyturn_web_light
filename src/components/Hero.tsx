'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Stethoscope, Users } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative  pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white shadow-premium border border-emerald-100/50 text-emerald-700 font-bold text-xs uppercase tracking-widest mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Smarter Turn-taking
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] text-slate-900 mb-8 tracking-tight">
                            Your turn, <br />
                            <span className="text-gradient">on time.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mb-10 font-medium">
                            Stop waiting in physical lines. Book your turn ahead, get live status updates, and arrive exactly when the service is ready. Effortless, transparent, and free.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary flex items-center justify-center gap-3 group"
                            >
                                Book Your First Turn
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-secondary flex items-center justify-center"
                            >
                                How It Works
                            </motion.button>
                        </div>

                        <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
                            <div>
                                <p className="text-2xl font-black text-slate-900">50k+</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Turns Served</p>
                            </div>
                            <div className="w-px h-10 bg-slate-100" />
                            <div>
                                <p className="text-2xl font-black text-slate-900">98%</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Satisfaction</p>
                            </div>
                            <div className="w-px h-10 bg-slate-100" />
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white">
                                    +5k
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative lg:h-[700px] flex items-center justify-center"
                    >
                        {/* Interactive UI Mockup */}
                        <div className="relative w-full max-w-[440px] perspective-1000">
                            <motion.div
                                style={{ rotateX: 5, rotateY: -10 }}
                                className="relative bg-white p-8 md:p-10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100"
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center mb-10">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Active Booking</p>
                                        <h3 className="text-2xl font-bold text-slate-900">Dr. Sarah Smith</h3>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                        <Stethoscope size={28} />
                                    </div>
                                </div>

                                {/* Main Token Card */}
                                <div className="bg-emerald-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden mb-8 shadow-xl shadow-emerald-200">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                    <div className="relative z-10 flex justify-between items-end mb-10">
                                        <div>
                                            <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest mb-2">Your Position</p>
                                            <p className="text-6xl font-black">#07</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest mb-2">Approx. Time</p>
                                            <p className="text-2xl font-black">10:30 <span className="text-lg">AM</span></p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex justify-between items-center bg-white/10 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/20">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                            <span className="text-sm font-semibold">Currently Serving</span>
                                        </div>
                                        <span className="font-bold text-xl uppercase tracking-tighter">Token #04</span>
                                    </div>
                                </div>

                                {/* Alert Box */}
                                <div className="bg-indigo-50/50 border border-indigo-100 p-6 rounded-[2rem] flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                                        <Users size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-900">2 people ahead</p>
                                        <p className="text-xs font-bold text-indigo-400">Arrive by 10:25 AM</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Floating Elements */}
                            <motion.div
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 -left-12 bg-white px-6 py-4 rounded-2xl shadow-premium border border-slate-100 z-20 flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 font-black">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time Saved</p>
                                    <p className="text-sm font-black text-slate-900">45 mins / visit</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [15, -15, 15] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-10 bg-white p-5 rounded-2xl shadow-premium border border-slate-100 z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                                        <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white" />
                                    </div>
                                    <p className="text-xs font-black text-slate-900">Verified Providers Only</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
