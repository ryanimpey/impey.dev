"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems: string[] = [];
    // const navItems = ["Planning", "Venues", "Photography", "Fashion", "Real Weddings", "Inspiration"];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-primary">Aisle Guide</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Search Icon */}
                    {/* <div className="flex items-center space-x-4">
                        <button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                            <Search className="h-5 w-5" />
                        </button>

                        <button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-foreground hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div> */}
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-border">
                        <div className="flex flex-col space-y-3 pt-4">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
