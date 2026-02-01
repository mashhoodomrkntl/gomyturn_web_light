'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Play, Calendar, CheckCircle2 } from 'lucide-react';

export default function GetDemo() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-xl bg-white shadow-premium border border-indigo-100 text-indigo-600 font-bold text-[10px] uppercase tracking-widest mb-8">
                                Personalized Tour
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.05]">
                                See how we <br />
                                <span className="text-gradient from-indigo-600 to-emerald-600">save time.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-500 font-medium mb-12 leading-relaxed">
                                Experience the future of queue management. Get a 1-on-1 walkthrough of the dashboard
                                and mobile booking experience.
                            </p>

                            <div className="space-y-6 mb-12">
                                {[
                                    "Live dashboard walkthrough",
                                    "Customer booking flow demo",
                                    "Analytics & Real-time reporting",
                                    "Custom setup consultation"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-5 group">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="text-slate-900 text-lg font-bold tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200 flex items-center gap-3"
                            >
                                <Calendar size={20} />
                                Schedule a 1-on-1 Demo
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative aspect-video bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group cursor-pointer border-8 border-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center z-10">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all group-hover:shadow-[0_0_80px_rgba(255,255,255,0.5)]"
                                >
                                    <Play size={40} fill="currentColor" className="ml-2" />
                                </motion.div>
                            </div>
                            <div className="absolute bottom-10 left-10 text-white z-20">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Introduction</p>
                                <p className="text-2xl font-black tracking-tight">How GoMyTurn Works</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
