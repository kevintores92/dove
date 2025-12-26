import { Link } from "wouter";
import logo from "@assets/Site_Logo_1766778529465.png";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <img src={logo} alt="Dove Equities" className="h-12 w-auto mb-6 brightness-0 invert opacity-90" />
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              New York's #1 Homebuyers. We buy houses in any condition, providing a fast, fair, and reliable selling experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Useful Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#hero" className="hover:text-primary transition-colors">Get a Cash Offer</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span>199 Lee Avenue, Suite 157,<br />Brooklyn, NY 11211</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@doveequities.com" className="hover:text-white">info@doveequities.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+15550000000" className="hover:text-white">(555) 000-0000</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Messaging Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Messaging Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs opacity-50">
          <p>&copy; {new Date().getFullYear()} Dove Equities. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
