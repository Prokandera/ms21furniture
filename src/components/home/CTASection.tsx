import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(25 40% 15% / 0.9), hsl(25 40% 15% / 0.7)), url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Experience the Difference
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Visit Our Showroom Today
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Nothing compares to experiencing our furniture in person. Visit our showroom to feel the quality, test the comfort, and get expert advice from our design consultants.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-primary font-semibold px-8"
            >
              <Link to="/contact">
                <MapPin size={18} className="mr-2" />
                Get Directions
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              <Link to="/products">
                Browse Online
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          {/* Showroom hours teaser */}
          <p className="mt-8 text-white/60 text-sm">
            Open Monday - Saturday: 10AM - 8PM | Sunday: 11AM - 6PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;