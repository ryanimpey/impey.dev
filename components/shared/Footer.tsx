import { Heart, Instagram, Facebook, Paintbrush as Pinterest, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Heart className="w-8 h-8 text-rose-400 fill-current" />
                            <span className="text-2xl font-bold font-dm-sans">Aisle Guide</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                            Your trusted companion for planning the perfect wedding. From inspiration to execution,
                            we're here to make your special day absolutely magical.
                        </p>
                        {/* <div className="flex items-center gap-4">
                            <button
                                variant="ghost"
                                size="sm"
                                className="text-slate-300 hover:text-white hover:bg-white/10"
                            >
                                <Instagram className="w-5 h-5" />
                            </button>
                            <button
                                variant="ghost"
                                size="sm"
                                className="text-slate-300 hover:text-white hover:bg-white/10"
                            >
                                <Facebook className="w-5 h-5" />
                            </button>
                            <button
                                variant="ghost"
                                size="sm"
                                className="text-slate-300 hover:text-white hover:bg-white/10"
                            >
                                <Pinterest className="w-5 h-5" />
                            </button>
                            <button
                                variant="ghost"
                                size="sm"
                                className="text-slate-300 hover:text-white hover:bg-white/10"
                            >
                                <Twitter className="w-5 h-5" />
                            </button>
                        </div> */}
                    </div>

                    {/* Quick Links */}
                    {/* <div>
                        <h3 className="text-lg font-semibold mb-4 font-dm-sans">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Wedding Planning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Venue Guide
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Fashion Trends
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Photography Tips
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Real Weddings
                                </a>
                            </li>
                        </ul>
                    </div> */}

                    {/* Resources */}
                    {/* <div>
                        <h3 className="text-lg font-semibold mb-4 font-dm-sans">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Planning Checklist
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Budget Calculator
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Vendor Directory
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Guest List Manager
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                                    Timeline Template
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">© 2025 Aisle Guide. Made in the uk 🇬🇧</p>
                    <div className="flex items-center gap-6 text-sm">
                        {/* <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">
                            Contact
                        </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
