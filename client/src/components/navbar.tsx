import { Link } from "wouter";
import logo from "@assets/Site_Logo_1766779724924.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md border-b border-gray-100" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Dove Equities" 
              className={`h-10 w-auto object-contain transition-all duration-300 ${
                isScrolled ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </a>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className={`text-sm font-medium transition-colors ${
            isScrolled ? "text-gray-600 hover:text-primary" : "text-white hover:text-blue-200"
          }`}>Home</button>
          <button onClick={() => scrollToSection('how-it-works')} className={`text-sm font-medium transition-colors ${
            isScrolled ? "text-gray-600 hover:text-primary" : "text-white hover:text-blue-200"
          }`}>How It Works</button>
          <button onClick={() => scrollToSection('faq')} className={`text-sm font-medium transition-colors ${
            isScrolled ? "text-gray-600 hover:text-primary" : "text-white hover:text-blue-200"
          }`}>FAQ</button>
          <button onClick={() => scrollToSection('contact')} className={`text-sm font-medium transition-colors ${
            isScrolled ? "text-gray-600 hover:text-primary" : "text-white hover:text-blue-200"
          }`}>Contact Us</button>
          <button 
            onClick={() => scrollToSection('hero')}
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all ${
              isScrolled 
                ? "text-white bg-primary hover:bg-blue-700 shadow-md hover:shadow-lg" 
                : "text-primary bg-white hover:bg-gray-100 shadow-md hover:shadow-lg"
            }`}
          >
            Get a Cash Offer
          </button>
        </div>
      </div>
    </nav>
  );
}
