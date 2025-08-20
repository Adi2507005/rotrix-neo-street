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
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-neon">
            Anime Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover our exclusive range of anime-inspired streetwear. Each piece is designed 
            to make you stand out with bold graphics and premium quality.
          </p>
        </div>

        {/* Product Categories */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-orbitron font-semibold text-accent mb-2">
                T-Shirts
              </h3>
              <p className="text-foreground/70">Bold anime graphics on premium cotton</p>
              <div className="text-3xl font-orbitron font-bold text-primary mt-2">₹799</div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-orbitron font-semibold text-accent mb-2">
                Pants
              </h3>
              <p className="text-foreground/70">Comfortable joggers with streetwear design</p>
              <div className="text-3xl font-orbitron font-bold text-primary mt-2">₹1099</div>
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

        {/* Size Guide */}
        <div className="mt-16 text-center">
          <div className="card-electric inline-block p-6">
            <h4 className="text-lg font-orbitron font-semibold mb-4 text-primary">
              Available Sizes
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <span 
                  key={size}
                  className="px-4 py-2 border border-accent/30 rounded-lg text-accent hover:border-accent transition-colors duration-200"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
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