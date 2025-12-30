import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">MS21 Furnitures</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Crafting Comfort for Your Home. Premium quality furniture designed to transform your living spaces into beautiful sanctuaries.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Categories</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/products?category=living-room" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                Living Room
              </Link>
              <Link to="/products?category=bedroom" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                Bedroom
              </Link>
              <Link to="/products?category=dining" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                Dining
              </Link>
              <Link to="/products?category=office" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
                Office
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  18-A , East Laxmi Market, Gali No. 1, Laxmi Nagar, Delhi-110092 (Main Khureji Red Light)
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 7409164070 , +91 7845576935 , +91 9355664070 (OFF.)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">Let U Know Soon</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Mon - Sat: 10AM - 8PM<br />
                  Sunday: 11AM - 6PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} MS21 Furnitures. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;