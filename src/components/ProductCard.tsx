import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart, Star } from "lucide-react";

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
  const [isLiked, setIsLiked] = useState(false);
  const rating = 4.5; // Mock rating

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
        
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-accent/30 hover:bg-accent/20 transition-colors duration-200"
        >
          <Heart 
            className={`w-5 h-5 transition-colors duration-200 ${
              isLiked ? 'fill-primary text-primary' : 'text-foreground/70'
            }`} 
          />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-orbitron font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
            {name}
          </h3>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-accent text-accent'
                    : i === Math.floor(rating) && rating % 1 !== 0
                    ? 'fill-accent/50 text-accent'
                    : 'text-foreground/30'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-foreground/70">({rating})</span>
        </div>

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

        {/* Price and Description */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-orbitron font-bold text-primary">
              ₹{price}
            </div>
            <div className="text-sm text-foreground/60">
              Free Delivery
            </div>
          </div>
          <p className="text-sm text-foreground/70">
            {category === "t-shirt" 
              ? "Bold anime graphics on premium cotton" 
              : "Comfortable joggers with streetwear design"}
          </p>
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