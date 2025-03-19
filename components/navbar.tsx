"use client";

import { useState } from "react";
import Link from "next/link";
import { Compass, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Compass className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-foreground">Immigration</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-red-600 transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-foreground hover:text-red-600 transition-colors">
              Services
            </Link>
            <Link href="/testimonials" className="text-foreground hover:text-red-600 transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-foreground hover:text-red-600 transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Book Consultation
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-red-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-3">
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;