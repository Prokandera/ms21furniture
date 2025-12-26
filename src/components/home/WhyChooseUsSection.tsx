import { Award, Truck, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Each piece is crafted from the finest materials, ensuring durability and timeless elegance.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Enjoy complimentary delivery and professional assembly on all orders over $500.",
  },
  {
    icon: ShieldCheck,
    title: "5-Year Warranty",
    description: "Rest easy with our comprehensive warranty covering manufacturing defects.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our design consultants are here to help you create your perfect space.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The MS21 Furnitures Promise
          </h2>
          <p className="text-muted-foreground text-lg">
            We're committed to delivering exceptional furniture and an unparalleled shopping experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-lg bg-card border border-border hover-lift opacity-0 animate-fade-in transition-all duration-500 hover:border-gold/50 hover:shadow-xl"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 transition-all duration-500 group-hover:bg-gold/20 group-hover:scale-110 group-hover:rotate-6">
                <feature.icon size={28} className="transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;