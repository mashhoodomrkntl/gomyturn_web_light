'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { HelpCircle, Search, MessageCircle, FileText } from 'lucide-react';

const faqs = [
    {
        q: "How do I book a turn?",
        a: "Simply find your service provider, choose an available slot, and confirm your booking. You'll receive a token number instantly."
    },
    {
        q: "Do I need an account to book?",
        a: "While you can browse services, an account is required to manage bookings and receive real-time updates."
    },
    {
        q: "Is GoMyTurn free for customers?",
        a: "Yes, GoMyTurn is completely free for customers to find and book services."
    },
    {
        q: "What if I'm late for my turn?",
        a: "The service provider may mark you as missed, but many allow a small grace period. It's best to arrive 5 minutes before your estimated time."
    }
];

export default function HelpPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-slate-50/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[120px] -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-xl bg-white shadow-premium border border-emerald-100 text-emerald-600 font-bold text-[10px] uppercase tracking-widest mb-8">
                            Knowledge Base
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.05]">
                            How can we <br />
                            <span className="text-gradient">help you today?</span>
                        </h1>
                        <div className="relative mt-12 max-w-2xl mx-auto group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={24} />
                            <input
                                type="text"
                                placeholder="Search for answers, guides, or tips..."
                                className="w-full pl-16 pr-8 py-6 rounded-[2rem] bg-white border border-slate-100 focus:border-emerald-500 focus:ring-8 focus:ring-emerald-500/5 shadow-premium outline-none transition-all font-medium text-lg placeholder:text-slate-300"
                            />
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {[
                            { icon: FileText, title: "Documentation", desc: "Detailed guides on mastering the GoMyTurn platform." },
                            { icon: HelpCircle, title: "FAQs", desc: "Quick answers to the most common questions." },
                            { icon: MessageCircle, title: "Live Support", desc: "Talk to our dedicated team for specific needs." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{item.title}</h3>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto bg-white p-10 md:p-20 rounded-[4rem] shadow-premium border border-slate-100">
                        <h2 className="text-3xl font-black text-slate-900 mb-12 tracking-tight text-center">Frequently Asked Questions</h2>
                        <div className="space-y-10">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors flex items-start gap-4">
                                        <span className="text-emerald-500 text-sm mt-1">Q.</span>
                                        {faq.q}
                                    </h4>
                                    <p className="text-slate-500 font-medium text-base leading-relaxed pl-8">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
