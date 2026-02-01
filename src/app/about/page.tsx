'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-24"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-xl bg-white shadow-premium border border-emerald-100 text-emerald-600 font-bold text-[10px] uppercase tracking-widest mb-8">
                            Our Story
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.05]">
                            Waiting is a <br />
                            <span className="text-gradient">solved problem.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                            Waiting steals time. Uncertainty creates stress. Crowded queues waste energy.
                            GoMyTurn was built to fix that. We believe your time is as valuable as the service you receive.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Our Mission</h2>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                                Our mission is to eliminate waiting in lines globally. By providing a smart,
                                real-time queue management system, we help businesses serve their customers
                                better and help people reclaim their most valuable asset: time.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    "No physical queues",
                                    "Live transparency",
                                    "Better UX",
                                    "Max efficiency"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="text-slate-900 font-bold tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 p-12 md:p-20 rounded-[4rem] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
                            <div className="relative z-10 text-center">
                                <p className="text-7xl font-black text-white mb-2 tracking-tighter italic">50K+</p>
                                <p className="text-emerald-400 font-black uppercase text-xs tracking-[0.2em] mb-16">Monthly Bookings</p>

                                <div className="grid grid-cols-2 gap-12 text-center pt-12 border-t border-slate-800">
                                    <div>
                                        <p className="text-4xl font-black text-white tracking-tighter">2.5K+</p>
                                        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-2">Providers</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-black text-white tracking-tighter">98%</p>
                                        <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-2">Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
