import Link from 'next/link';
import { Clock } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-105">
                        <Clock size={24} />
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">GoMyTurn</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">Home</Link>
                    <Link href="/about" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">About</Link>
                    <Link href="/services" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">Services</Link>
                    <Link href="/get-demo" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">Get a Demo</Link>
                    <Link href="/help" className="text-gray-600 hover:text-[var(--color-primary)] font-medium transition-colors">Help</Link>
                </nav>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/login" className="text-gray-700 font-semibold hover:text-[var(--color-primary)] transition-colors">
                        Login
                    </Link>
                    <Link href="/register" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-95">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden p-2 text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
