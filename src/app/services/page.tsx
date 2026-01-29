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
        <main className="min-h-screen bg-white">
            <Header />
            <section className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services you need. When you need them.</h1>
                        <p className="text-lg text-gray-600">
                            Find verified providers with clear schedules. No guessing. Arrive exactly when it's your turn.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {allServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-emerald-200 hover:shadow-xl transition-all text-center cursor-pointer"
                            >
                                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                    <service.icon size={32} />
                                </div>
                                <h3 className="font-bold text-gray-900">{service.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
