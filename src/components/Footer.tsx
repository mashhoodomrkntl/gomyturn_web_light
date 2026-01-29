import { Clock, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] pt-20 pb-10 text-gray-400 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-xl flex items-center justify-center text-white">
                                <Clock size={24} />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">GoMyTurn</span>
                        </Link>
                        <p className="not-italic leading-relaxed text-sm">
                            Take your turn, the smarter way. Smarter turn-taking for everyday services.
                        </p>
                        <div className="text-sm space-y-2">
                            <p>Email: sofbudgroup@gmail.com</p>
                            <p>WhatsApp: +91 9453 45XXXX</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About', href: '/about' },
                                { name: 'Services', href: '/services' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-[var(--color-primary)] transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Support</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: 'Help', href: '/help' },
                                { name: 'Customer Support', href: '/customer-support' },
                                { name: 'Get a Demo', href: '/get-demo' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-[var(--color-primary)] transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            {['Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© 2026 GoMyTurn. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={14} className="text-pink-500 fill-pink-500" /> by Sofbud Group
                    </p>
                </div>
            </div>
        </footer>
    );
}
