import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "All Products" },
  { id: "living-room", name: "Living Room" },
  { id: "bedroom", name: "Bedroom" },
  { id: "dining", name: "Dining" },
  { id: "office", name: "Office" },
];

const products = [
  {
    id: 1,
    name: "Luxe Velvet Sofa",
    category: "living-room",
    price: 2499,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    description: "Elegant three-seater sofa with premium velvet upholstery",
  },
  {
    id: 2,
    name: "Vintage Leather Armchair",
    category: "living-room",
    price: 899,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2787&auto=format&fit=crop",
    description: "Classic leather armchair with brass accents",
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    category: "living-room",
    price: 649,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=2787&auto=format&fit=crop",
    description: "Minimalist oak coffee table with clean lines",
  },
  {
    id: 4,
    name: "King Size Bed Frame",
    category: "bedroom",
    price: 1899,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    description: "Solid wood bed frame with upholstered headboard",
  },
  {
    id: 5,
    name: "Walnut Wardrobe",
    category: "bedroom",
    price: 2299,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2787&auto=format&fit=crop",
    description: "Spacious walnut wardrobe with mirrored doors",
  },
  {
    id: 6,
    name: "Bedside Nightstand",
    category: "bedroom",
    price: 399,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53e79a3e?q=80&w=2787&auto=format&fit=crop",
    description: "Compact nightstand with soft-close drawers",
  },
  {
    id: 7,
    name: "Oak Dining Table",
    category: "dining",
    price: 1699,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2832&auto=format&fit=crop",
    description: "Extendable dining table seating up to 8 guests",
  },
  {
    id: 8,
    name: "Upholstered Dining Chair",
    category: "dining",
    price: 349,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2787&auto=format&fit=crop",
    description: "Comfortable dining chair with fabric seat",
  },
  {
    id: 9,
    name: "Buffet Sideboard",
    category: "dining",
    price: 1299,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2787&auto=format&fit=crop",
    description: "Elegant storage sideboard with wine rack",
  },
  {
    id: 10,
    name: "Executive Desk",
    category: "office",
    price: 1199,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2036&auto=format&fit=crop",
    description: "Spacious desk with built-in cable management",
  },
  {
    id: 11,
    name: "Ergonomic Office Chair",
    category: "office",
    price: 799,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2787&auto=format&fit=crop",
    description: "Premium ergonomic chair with lumbar support",
  },
  {
    id: 12,
    name: "Bookshelf Unit",
    category: "office",
    price: 599,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?q=80&w=2839&auto=format&fit=crop",
    description: "Modular bookshelf with adjustable shelves",
  },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Premium Furniture
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Discover our curated selection of handcrafted furniture pieces designed to elevate your living spaces
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={activeCategory === category.id ? "bg-primary" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-lg overflow-hidden border border-border hover-lift opacity-0 animate-fade-in-up transition-all duration-500 hover:border-gold/30 hover:shadow-2xl"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2 transition-colors duration-300 group-hover:text-gold">
                    {categories.find((c) => c.id === product.category)?.name}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 transition-colors duration-300 group-hover:text-foreground/80">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-105">
                      ${product.price.toLocaleString()}
                    </span>
                    <Button variant="outline" size="sm" className="transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Products;