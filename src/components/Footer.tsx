import { Clock, Heart, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 pt-24 pb-12 text-slate-400 border-t border-slate-800 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-24">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
                                <Clock size={28} />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tight">
                                GoMy<span className="text-emerald-500">Turn</span>
                            </span>
                        </Link>
                        <p className="not-italic leading-relaxed text-sm font-medium">
                            The professional's choice for modern queue management. Efficient, transparent, and always on time.
                        </p>
                        <div className="text-sm space-y-3 font-bold">
                            <Link href="mailto:sofbudgroup@gmail.com" className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                                <Mail size={18} />
                                sofbudgroup@gmail.com
                            </Link>
                            <Link href="https://wa.me/919453" className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                                <Phone size={18} />
                                +91 9453 45XXXX
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-white uppercase text-[10px] tracking-widest mb-10">Company</h4>
                        <ul className="space-y-5 text-sm font-bold">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About GoMyTurn', href: '/about' },
                                { name: 'Verified Services', href: '/services' },
                                { name: 'Request Demo', href: '/get-demo' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-emerald-400 transition-all hover:translate-x-1 inline-block">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-white uppercase text-[10px] tracking-widest mb-10">Support</h4>
                        <ul className="space-y-5 text-sm font-bold">
                            {[
                                { name: 'Help Center', href: '/help' },
                                { name: 'Customer Support', href: '/customer-support' },
                                { name: 'Terms of Service', href: '#' },
                                { name: 'Privacy Policy', href: '#' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-emerald-400 transition-all hover:translate-x-1 inline-block">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700/50">
                        <h4 className="font-black text-white uppercase text-[10px] tracking-widest mb-6">Stay Updated</h4>
                        <p className="text-xs font-medium mb-6 leading-relaxed">Join 5,000+ businesses receiving our weekly efficiency tips.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl text-xs outline-none focus:border-emerald-500 transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest">
                    <p>© 2026 GoMyTurn. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Designed with <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" /> by Sofbud Group
                    </p>
                </div>
            </div>
        </footer>
    );
}
