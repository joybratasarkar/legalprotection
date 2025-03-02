"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-primary-dark text-white fixed w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                
                {/* Logo */}
                <div className="text-3xl font-bold tracking-widest">
                    <Link href="/" className="hover:text-accent-light transition duration-300">
                        LegalEdge
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-lg">
                    <Link href="/" className="hover:text-accent-light transition duration-300">Home</Link>
                    <Link href="/about" className="hover:text-accent-light transition duration-300">About</Link>
                    <Link href="/services" className="hover:text-accent-light transition duration-300">Services</Link>
                    <Link href="/contact" className="hover:text-accent-light transition duration-300">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <Bars3Icon className="h-8 w-8 text-white" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="md:hidden bg-primary-dark text-white py-4">
                    <ul className="space-y-4 text-center">
                        <li><Link href="/" className="block hover:text-accent-light transition duration-300">Home</Link></li>
                        <li><Link href="/about" className="block hover:text-accent-light transition duration-300">About</Link></li>
                        <li><Link href="/services" className="block hover:text-accent-light transition duration-300">Services</Link></li>
                        <li><Link href="/contact" className="block hover:text-accent-light transition duration-300">Contact</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
