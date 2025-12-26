import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Interior Designer",
    content: "MS Furnitures exceeded all my expectations. The quality of their pieces is outstanding, and the customer service was impeccable. My clients absolutely love the furniture we've selected.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Homeowner",
    content: "We furnished our entire living room with MS Furnitures, and the transformation is incredible. The craftsmanship is evident in every detail. Worth every penny!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Architect",
    content: "The attention to detail and commitment to quality at MS Furnitures is remarkable. They've become my go-to recommendation for all my residential projects.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from homeowners and designers who've transformed their spaces with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-card p-8 rounded-lg border border-border relative hover-lift opacity-0 animate-fade-in-up transition-all duration-500 hover:border-gold/30 hover:shadow-xl"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-accent/20 transition-all duration-500 group-hover:text-gold/40 group-hover:scale-110 group-hover:rotate-12" size={40} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold transition-transform duration-300 hover:scale-125" style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-foreground">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gold/0 transition-colors duration-300 group-hover:bg-gold/10 rounded-full" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;