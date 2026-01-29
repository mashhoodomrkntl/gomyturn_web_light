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
            <section className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How can we help?</h1>
                        <div className="relative mt-8">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for help..."
                                className="w-full pl-12 pr-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm transition-all"
                            />
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: FileText, title: "Documentation", desc: "Detailed guides on using the platform" },
                            { icon: HelpCircle, title: "FAQs", desc: "Quick answers to common questions" },
                            { icon: MessageCircle, title: "Support", desc: "Talk to our team for specific issues" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all cursor-pointer"
                            >
                                <item.icon className="text-emerald-600 mb-4" size={32} />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 10 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-2xl bg-white border border-gray-100"
                                >
                                    <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
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
