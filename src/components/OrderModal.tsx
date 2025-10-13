import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}

const OrderModal = ({ isOpen, onClose, product }: OrderModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
    size: "",
    paymentMethod: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.address || !formData.city || !formData.zipcode || !formData.size || !formData.paymentMethod) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Send order data to webhook
      const orderData = {
        customer: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        },
        delivery: {
          address: formData.address,
          city: formData.city,
          zipcode: formData.zipcode,
        },
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          selectedColor: product.selectedColor,
          category: product.category,
        },
        order: {
          size: formData.size,
          paymentMethod: formData.paymentMethod,
          timestamp: new Date().toISOString(),
          orderId: `ROT-${Date.now()}`,
        }
      };

      await fetch('https://adityamishra69.app.n8n.cloud/webhook-test/73c2883e-4964-41d9-b8ca-e546ce7cfff5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(orderData),
      });

      // Show success message
      toast({
        title: "Order Placed Successfully! 🎉",
        description: `Your ${product?.name} order has been confirmed. We'll contact you soon!`,
      });

      // Reset form and close modal
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        zipcode: "",
        size: "",
        paymentMethod: "",
      });
      onClose();
    } catch (error) {
      console.error('Error sending order to webhook:', error);
      toast({
        title: "Order Processing Error",
        description: "There was an issue processing your order. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border-accent/30 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-orbitron font-bold text-center text-neon">
            Order Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Summary */}
          <div className="card-electric p-4">
            <div className="flex items-center space-x-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">{product.name}</h3>
                <p className="text-accent">{product.selectedColor}</p>
                <p className="text-2xl font-orbitron font-bold text-primary">₹{product.price}</p>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-input border-border text-foreground"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-input border-border text-foreground"
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-input border-border text-foreground"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-foreground">Delivery Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="bg-input border-border text-foreground"
                placeholder="Enter your full address"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city" className="text-foreground">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="bg-input border-border text-foreground"
                  placeholder="City"
                  required
                />
              </div>
              <div>
                <Label htmlFor="zipcode" className="text-foreground">Zipcode *</Label>
                <Input
                  id="zipcode"
                  value={formData.zipcode}
                  onChange={(e) => handleInputChange("zipcode", e.target.value)}
                  className="bg-input border-border text-foreground"
                  placeholder="000000"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="text-foreground">Size *</Label>
              <Select value={formData.size} onValueChange={(value) => handleInputChange("size", value)}>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Select your size" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <SelectItem key={size} value={size} className="text-foreground">
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-foreground">Payment Method *</Label>
              <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Choose payment method" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="cod" className="text-foreground">Cash on Delivery (COD)</SelectItem>
                  <SelectItem value="upi" className="text-foreground">UPI Payment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-accent text-accent hover:bg-accent hover:text-background"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 btn-neon"
              >
                Place Order
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;