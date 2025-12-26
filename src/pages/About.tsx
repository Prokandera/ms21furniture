import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description: "Every piece is meticulously crafted using premium materials and time-honored techniques.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: Target,
    title: "Timeless Design",
    description: "We create furniture that transcends trends, offering enduring beauty for generations.",
  },
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "Our love for what we do shines through in every detail of our work.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our Story
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              About MS21 Furnitures
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              For over two decades, we've been transforming houses into homes with our exquisite furniture collections. Our passion for quality and design drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Our Heritage
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MS21 Furnitures was founded with a simple yet powerful vision: to create furniture that brings joy and comfort to every home. What started as a small workshop has grown into a beloved destination for discerning homeowners and design professionals alike.
                </p>
                <p>
                  Our journey began when our founders, passionate artisans with decades of experience, decided to combine traditional craftsmanship with contemporary design. This unique approach has become the hallmark of our brand.
                </p>
                <p>
                  Today, we continue to honor that legacy by sourcing the finest materials, employing skilled craftspeople, and maintaining an unwavering commitment to quality that has earned us the trust of thousands of satisfied customers.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
                  alt="MS21 Furnitures showroom"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="font-display text-4xl font-bold">20+</p>
                  <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop"
                alt="Craftsmanship at MS21 Furnitures"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Our Mission
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Crafting Comfort for Your Home
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our mission is to create furniture that not only beautifies your space but also enhances your daily life. We believe that great furniture should be both a pleasure to behold and a joy to use.
                </p>
                <p>
                  We're committed to sustainable practices, working with responsibly sourced materials and implementing eco-friendly manufacturing processes. Quality and environmental responsibility go hand in hand at MS21 Furnitures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Our Values
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              These core values guide every decision we make and every piece we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-lg bg-card border border-border hover-lift opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;