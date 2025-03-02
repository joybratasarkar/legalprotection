"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <header className="bg-primary-dark text-white fixed w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                
                {/* Logo */}
                <div className="text-3xl font-bold tracking-widest">
                    <a href="/" className="hover:text-accent-light transition duration-300">
                        LegalEdge
                    </a>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-lg">
                    <a href="/" className="hover:text-accent-light transition duration-300">Home</a>
                    <a href="/about" className="hover:text-accent-light transition duration-300">About</a>
                    <a href="/services" className="hover:text-accent-light transition duration-300">Services</a>
                    <a href="/contact" className="hover:text-accent-light transition duration-300">Contact</a>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Bars3Icon className="h-8 w-8 text-white" />
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="hidden md:hidden bg-primary-dark text-white py-4">
                <ul className="space-y-4 text-center">
                    <li><a href="/" className="block hover:text-accent-light transition duration-300">Home</a></li>
                    <li><a href="/about" className="block hover:text-accent-light transition duration-300">About</a></li>
                    <li><a href="/services" className="block hover:text-accent-light transition duration-300">Services</a></li>
                    <li><a href="/contact" className="block hover:text-accent-light transition duration-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
