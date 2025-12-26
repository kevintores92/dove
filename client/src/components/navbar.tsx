import { Link } from "wouter";
import logo from "@assets/Site_Logo_1766779724924.png";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Dove Equities" 
              className="h-10 w-auto object-contain"
            />
          </a>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">How It Works</button>
          <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">FAQ</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Contact Us</button>
          <button 
            onClick={() => scrollToSection('hero')}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Get a Cash Offer
          </button>
        </div>
      </div>
    </nav>
  );
}
