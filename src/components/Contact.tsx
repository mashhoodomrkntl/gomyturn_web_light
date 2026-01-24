'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-block px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-semibold text-sm mb-8">
                            Contact Us
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Ready to transform your <br />
                            <span className="text-[var(--color-primary)]">queue experience?</span>
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-12 leading-relaxed">
                            Have questions? We'd love to hear from you. Reach out and let's make waiting smarter together.
                        </p>

                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                    <Mail size={26} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-2 font-medium">Email us</p>
                                    <a href="mailto:sofbudgroup@gmail.com" className="text-lg font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                                        sofbudgroup@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                    <Phone size={26} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-2 font-medium">WhatsApp</p>
                                    <a href="https://wa.me/9145345" className="text-lg font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors">
                                        +91 45345
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:ring-0 focus:outline-none transition-all placeholder:text-gray-400 bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:ring-0 focus:outline-none transition-all placeholder:text-gray-400 bg-gray-50 focus:bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:ring-0 focus:outline-none transition-all placeholder:text-gray-400 bg-gray-50 focus:bg-white resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
