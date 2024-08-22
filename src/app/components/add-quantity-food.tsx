import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function AddQuantityFood() {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddedCart = () => {
    setIsAdded(!isAdded);
  };

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 9) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8"
        onClick={decrement}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <input
        className="w-3 text-lg font-medium"
        value={quantity}
        onChange={handleChange}
        min="0"
      />
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8"
        onClick={increment}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      <Button
        className="flex h-8 items-center justify-center gap-1 rounded-lg bg-red-600 text-xs text-zinc-50 hover:bg-red-700"
        size="sm"
        onClick={handleAddedCart}
      >
        <ShoppingCart className="h-4 w-4 fill-current" />
      </Button>
    </div>
  );
}
