import ProductCard from "./ProductCard";
import { useState } from "react";
import OrderModal from "./OrderModal";

// Import product images
import tshirtBlack from "@/assets/tshirt-black-anime.jpg";
import tshirtRed from "@/assets/tshirt-red-anime.jpg";
import pantsNavy from "@/assets/pants-navy-anime.jpg";
import pantsPurple from "@/assets/pants-purple-anime.jpg";

const products = [
  {
    id: "tshirt-cyber",
    name: "Cyber Samurai Tee",
    price: 799,
    image: tshirtBlack,
    colors: ["Black", "Navy", "Dark Purple"],
    category: "t-shirt" as const,
  },
  {
    id: "tshirt-neon",
    name: "Neon Tokyo Tee",
    price: 799,
    image: tshirtRed,
    colors: ["Red", "Black", "Electric Blue"],
    category: "t-shirt" as const,
  },
  {
    id: "pants-street",
    name: "Street Fighter Joggers",
    price: 1099,
    image: pantsNavy,
    colors: ["Navy", "Black", "Dark Grey"],
    category: "pants" as const,
  },
  {
    id: "pants-graffiti",
    name: "Graffiti Anime Pants",
    price: 1099,
    image: pantsPurple,
    colors: ["Dark Purple", "Black", "Midnight Blue"],
    category: "pants" as const,
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOrder = (product: any) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon-yellow">
            Anime Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-electric-pink mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-poppins">
            Discover our exclusive range of anime-inspired streetwear. Each piece is designed 
            to make you stand out with bold graphics and premium quality.
          </p>
        </div>

        {/* Customer Stats */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-8 card-cyberpunk p-6">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-purple">500+</div>
              <div className="text-foreground/70 font-poppins">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-neon-yellow/30"></div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-neon-purple">24hr</div>
              <div className="text-foreground/70 font-poppins">Delivery</div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onOrder={handleOrder}
            />
          ))}
        </div>

      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={closeOrderModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default Products;