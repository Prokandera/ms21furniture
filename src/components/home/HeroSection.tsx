import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/lx_bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Tagline */}
          <p
            className="text-gold font-medium tracking-[0.3em] uppercase text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Crafting Comfort for Your Home
          </p>

          {/* Heading */}
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Where Elegance
            <span className="block text-gold">Meets Comfort</span>
          </h1>

          {/* Description */}
          <p
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Discover our exquisite collection of handcrafted furniture, designed to transform your living spaces into timeless sanctuaries of comfort and style.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-6 text-base shadow-xl"
            >
              <Link to="/products" className="flex items-center gap-2">
                Explore Collection
                <ArrowRight size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent"
            >
              <Link to="/contact">Visit Showroom</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
