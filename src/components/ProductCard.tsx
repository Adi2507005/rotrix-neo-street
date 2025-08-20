import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  category: "t-shirt" | "pants";
  onOrder: (product: any) => void;
}

const ProductCard = ({ id, name, price, image, colors, category, onOrder }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleOrder = () => {
    onOrder({
      id,
      name,
      price,
      image,
      selectedColor,
      category
    });
  };

  return (
    <div className="card-electric group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
          {category === "t-shirt" ? "T-Shirt" : "Pants"}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-orbitron font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {name}
        </h3>

        {/* Color Selection */}
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-3 py-1 rounded-full text-sm border transition-all duration-200 ${
                selectedColor === color
                  ? 'border-primary bg-primary/20 text-primary'
                  : 'border-foreground/30 text-foreground/70 hover:border-accent hover:text-accent'
              }`}
            >
              {color}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-orbitron font-bold text-primary">
            ₹{price}
          </div>
          <div className="text-sm text-foreground/60">
            Free Delivery
          </div>
        </div>

        {/* Buy Now Button */}
        <Button 
          onClick={handleOrder}
          className="w-full btn-neon group-hover:scale-105 transition-transform duration-300"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;