import { Link } from "react-router-dom";
import { Sofa, Bed, UtensilsCrossed, Briefcase } from "lucide-react";

const categories = [
  {
    name: "Living Room",
    description: "Sofas, armchairs & coffee tables",
    icon: Sofa,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    slug: "living-room",
  },
  {
    name: "Bedroom",
    description: "Beds, wardrobes & nightstands",
    icon: Bed,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    slug: "bedroom",
  },
  {
    name: "Dining",
    description: "Tables, chairs & storage",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2832&auto=format&fit=crop",
    slug: "dining",
  },
  {
    name: "Office",
    description: "Desks, chairs & shelving",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2036&auto=format&fit=crop",
    slug: "office",
  },
];

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Our Collections
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our carefully curated furniture collections for every room in your home
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/products?category=${category.slug}`}
              className="group relative overflow-hidden rounded-lg aspect-[3/4] hover-lift opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <category.icon size={24} className="text-gold" />
                  <h3 className="font-display text-xl font-semibold">{category.name}</h3>
                </div>
                <p className="text-white/70 text-sm">{category.description}</p>
                <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore Collection
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;