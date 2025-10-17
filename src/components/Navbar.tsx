"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll effect - show header when scrolled > 100px on home page, always show on other pages
  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        setIsScrolled(window.scrollY > 100);
      } else {
        setIsScrolled(true); // Always show header on non-home pages
      }
    };
    
    // Set initial state
    if (pathname === '/') {
      setIsScrolled(window.scrollY > 100);
    } else {
      setIsScrolled(true);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
          <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-lg translate-y-0'
              : pathname === '/'
                ? 'bg-transparent backdrop-blur-none border-b-0 shadow-none -translate-y-full'
                : 'bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-lg translate-y-0'
          }`}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="h-16 md:h-20 flex items-center justify-between">
            {/* Animated Hamburger Menu */}
            <button
              onClick={toggleMenu}
                  className={`group p-2 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
                    isScrolled
                      ? 'hover:bg-amber-50'
                      : 'hover:bg-white/20'
                  }`}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-1 left-0 w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                <span className={`absolute top-3 left-0 w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute top-1 left-0 w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
              </div>
            </button>

                {/* Elegant Centered Logo */}
                <Link
                  href="/"
                  className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
                  onClick={closeMenu}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 relative">
                    <Image
                      src="/logo.webp"
                      alt="WEDDINGS BY ARTISTIC"
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-left">
                    <div className={`text-xs md:text-sm font-light tracking-[0.15em] uppercase transition-all duration-300 group-hover:tracking-[0.2em] ${
                      isScrolled ? 'text-gray-600' : 'text-white/80'
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}>
                      WEDDINGS BY
                    </div>
                    <div className={`text-base md:text-lg font-bold tracking-wide transition-all duration-300 group-hover:tracking-wider ${
                      isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}>
                      ARTISTIC
                    </div>
                  </div>
                </Link>

            {/* Elegant Book Button */}
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-xl px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{ backgroundColor: "var(--accent)" }}
              onClick={closeMenu}
            >
              <span className="relative z-10">Book a Shoot</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </header>

      {/* Animated Overlay Menu */}
      {isMenuOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-all duration-500"
              onClick={closeMenu}
              style={{
                animation: 'fadeIn 0.3s ease-out'
              }}
            >
              <div
                className="fixed inset-y-0 left-0 w-96 max-w-[90vw] bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{
                  animation: 'slideInLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Animated Header */}
                <div className="flex items-center justify-between p-6 border-b border-amber-200 bg-gradient-to-r from-white to-amber-50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/logo.webp"
                        alt="WEDDINGS BY ARTISTIC"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-light tracking-[0.15em] uppercase text-gray-600" style={{ fontFamily: "var(--font-heading)" }}>
                        WEDDINGS BY
                      </div>
                      <div className="text-base font-bold tracking-wide text-gray-800" style={{ fontFamily: "var(--font-heading)" }}>
                        ARTISTIC
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="group p-2 rounded-xl hover:bg-amber-50 transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
            </div>

            {/* Animated Navigation Links */}
            <nav className="p-6">
              <ul className="space-y-4">
                {navItems.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <li 
                      key={item.href}
                      style={{
                        animation: `slideInUp 0.5s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                            className={`group block py-4 px-6 rounded-2xl text-lg font-light transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                              active
                                ? "text-white shadow-xl"
                                : "text-gray-700 hover:text-gray-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100"
                            }`}
                        style={active ? { 
                          backgroundColor: "var(--accent)",
                          boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)"
                        } : {}}
                      >
                        <div className="flex items-center justify-between">
                          <span className="group-hover:translate-x-2 inline-block transition-transform duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                            {item.label}
                          </span>
                          {active && (
                            <span className="text-sm opacity-90 font-light">●</span>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>

                  {/* Animated CTA Section */}
                  <div
                    className="mt-8 pt-6 border-t border-amber-200"
                    style={{
                      animation: 'slideInUp 0.6s ease-out 0.5s both'
                    }}
                  >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="group block w-full text-center py-4 px-6 rounded-2xl text-white font-light text-base transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{ 
                    backgroundColor: "var(--accent)",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)"
                  }}
                >
                  <span className="group-hover:tracking-wider transition-all duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                    Get In Touch
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { 
            transform: translateX(-100%); 
            opacity: 0;
          }
          to { 
            transform: translateX(0); 
            opacity: 1;
          }
        }
        
        @keyframes slideInUp {
          from { 
            transform: translateY(30px); 
            opacity: 0;
          }
          to { 
            transform: translateY(0); 
            opacity: 1;
          }
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}


