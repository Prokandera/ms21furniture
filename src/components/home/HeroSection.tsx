import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(25 40% 15% / 0.7), hsl(25 40% 10% / 0.85)), url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tagline */}
          <p 
            className="text-gold font-medium tracking-[0.3em] uppercase text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Crafting Comfort for Your Home
          </p>
          
          {/* Main Heading */}
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Where Elegance
            <span className="block text-gold">Meets Comfort</span>
          </h1>
          
          {/* Description */}
          <p 
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Discover our exquisite collection of handcrafted furniture, designed to transform your living spaces into timeless sanctuaries of comfort and style.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-primary font-semibold px-8 py-6 text-base"
            >
              <Link to="/products">
                Explore Collection
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent"
            >
              <Link to="/contact">Visit Showroom</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;