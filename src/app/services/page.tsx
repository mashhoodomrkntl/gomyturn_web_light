'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import {
    Stethoscope, Scissors, Car, Building2,
    Baby, Brain, Heart, Sparkles, Utensils,
    GraduationCap, Scale, Landmark
} from 'lucide-react';

const allServices = [
    { icon: Stethoscope, name: "Consultants", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: Baby, name: "Gynecology", color: "text-pink-500", bg: "bg-pink-50" },
    { icon: Brain, name: "Neurology", color: "text-purple-500", bg: "bg-purple-50" },
    { icon: Heart, name: "Wellness", color: "text-red-500", bg: "bg-red-50" },
    { icon: Scissors, name: "Salons & Beauty", color: "text-emerald-500", bg: "bg-emerald-50" },
    { icon: Sparkles, name: "Dental Clinics", color: "text-cyan-500", bg: "bg-cyan-50" },
    { icon: Car, name: "Car Service", color: "text-amber-500", bg: "bg-amber-50" },
    { icon: Building2, name: "Hospitals & Clinics", color: "text-indigo-500", bg: "bg-indigo-50" },
    { icon: Scale, name: "Legal Services", color: "text-slate-500", bg: "bg-slate-50" },
    { icon: Landmark, name: "Govt. Offices", color: "text-orange-500", bg: "bg-orange-50" },
    { icon: Utensils, name: "Restaurants", color: "text-rose-500", bg: "bg-rose-50" },
    { icon: GraduationCap, name: "Education", color: "text-teal-500", bg: "bg-teal-50" }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50/50">
            <Header />
            <section className="pt-40 pb-24 md:pt-48 md:pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[120px] -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-24"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-xl bg-white shadow-premium border border-emerald-100 text-emerald-600 font-bold text-[10px] uppercase tracking-widest mb-8">
                            Directory
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.05]">
                            Services you need, <br />
                            <span className="text-gradient">on your time.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                            Find verified providers with clear schedules. No more guessing. Book ahead and arrive exactly when it's your turn.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {allServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -10 }}
                                className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-premium hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 text-center cursor-pointer"
                            >
                                <div className={`w-20 h-20 mx-auto mb-8 rounded-[1.5rem] ${service.bg} ${service.color} flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm shadow-slate-100`}>
                                    <service.icon size={36} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-emerald-600 transition-colors">{service.name}</h3>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Available Now</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
