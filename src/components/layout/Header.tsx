import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 py-2 shadow-lg backdrop-blur-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-14 mr-3">
              <Image 
                src="/images/logo.svg" 
                alt="Art Culture Sculpture Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-white font-bold text-xl">Art Culture Sculpture</span>
          </Link>
          
          {/* Navigation Bureau */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              <li>
                <Link href="/" className="text-white hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/activites" className="text-white hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
                  Activités
                </Link>
              </li>
              <li>
                <Link href="/artistes" className="text-white hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
                  Artistes
                </Link>
              </li>
              <li>
                <Link href="/ayants-droit" className="text-white hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
                  Ayants droit
                </Link>
              </li>
              <li>
                <Link href="/comites-dartiste" className="text-white hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
                  Comités d'artiste
                </Link>
              </li>
              <li>
                <Link href="/fondations" className="text-white hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
                  Fondations
                </Link>
              </li>
              <li>
                <Link href="/devenir-membre" className="text-white hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
                  Devenir membre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-primary px-3 py-2 rounded-md transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Bouton menu mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white"
            aria-label="Menu mobile"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      <div 
        className={`md:hidden absolute w-full bg-secondary shadow-xl transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link 
                href="/" 
                className="text-white hover:text-primary block py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="/activites" 
                className="text-white hover:text-primary block py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Activités
              </Link>
            </li>
            <li>
              <Link 
                href="/artistes" 
                className="text-white hover:text-primary block py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Artistes
              </Link>
            </li>
            <li>
              <Link 
                href="/ayants-droit" 
                className="text-white hover:text-primary block py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Ayants droit
              </Link>
            </li>
            <li>
              <Link 
                href="/comites-dartiste" 
                className="text-white hover:text-primary block py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Comités d'artiste
              </Link>
            </li>
            <li>
              <Link 
                href="/fondations" 
                className="text-white hover:text-primary block py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Fondations
              </Link>
            </li>
            <li>
              <Link 
                href="/devenir-membre" 
                className="text-white hover:text-primary block py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Devenir membre
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-white hover:text-primary block py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}