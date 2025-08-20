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

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'Black': 'bg-black',
      'Navy': 'bg-blue-900',
      'Dark Purple': 'bg-purple-900',
      'Red': 'bg-red-600',
      'Electric Blue': 'bg-cyan-400',
      'Dark Grey': 'bg-gray-700',
      'Midnight Blue': 'bg-blue-950',
    };
    return colorMap[color] || 'bg-gray-500';
  };

  return (
    <div className="card-cyberpunk group">
      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-neon-purple text-deep-black px-3 py-1 rounded-full text-xs font-bold uppercase font-orbitron">
          {category}
        </div>
        
        {/* Like Button */}
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 hover:bg-neon-yellow/20 transition-all duration-300 border border-neon-yellow/30"
        >
          <Heart 
            className={`w-5 h-5 transition-all duration-300 ${
              isLiked ? 'fill-electric-pink text-electric-pink animate-pulse' : 'text-foreground hover:text-electric-pink'
            }`} 
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />
          ))}
          <span className="text-sm text-foreground/70 ml-2 font-poppins">(4.8)</span>
        </div>

        {/* Name and Price */}
        <div>
          <h3 className="text-lg font-orbitron font-bold text-neon-yellow mb-2">{name}</h3>
          <p className="text-2xl font-bold text-neon-purple">₹{price}</p>
          <p className="text-sm text-foreground/70 mt-1 font-poppins">Premium anime streetwear with bold graphics</p>
        </div>

        {/* Color Options */}
        <div>
          <p className="text-sm font-medium text-foreground/80 mb-2 font-poppins">Colors:</p>
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                  selectedColor === color 
                    ? 'border-neon-yellow scale-110 shadow-neon-yellow' 
                    : 'border-foreground/30 hover:border-neon-yellow hover:scale-105'
                } ${getColorClass(color)}`}
                title={color}
              />
            ))}
          </div>
          <p className="text-xs text-cyber-blue mt-1 font-poppins">Selected: {selectedColor}</p>
        </div>

        {/* Order Button */}
        <button 
          onClick={handleOrder}
          className="w-full btn-cyberpunk text-center font-orbitron"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;