import Link from 'next/link';
import { Clock } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 transition-all duration-300 glass border-b border-slate-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center text-white transition-all group-hover:scale-105 shadow-lg shadow-emerald-600/20 group-hover:shadow-emerald-600/40">
                        <Clock size={26} strokeWidth={2.5} />
                    </div>
                    <span className="text-2xl font-bold text-slate-900 tracking-tight leading-none">
                        GoMy<span className="text-emerald-600">Turn</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About', href: '/about' },
                        { name: 'Services', href: '/services' },
                        { name: 'Demo', href: '/get-demo' },
                        { name: 'Help', href: '/help' },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-slate-600 hover:text-emerald-600 font-semibold transition-colors text-sm tracking-wide"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="px-6 py-2.5 text-slate-700 font-bold hover:text-emerald-600 transition-colors text-sm">
                        Login
                    </Link>
                    <Link href="/register" className="btn-primary py-2.5 text-sm">
                        Get Started Free
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2.5 rounded-xl bg-slate-50 text-slate-900 border border-slate-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
