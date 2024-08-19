"use client";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export function AddToCart() {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddedCart = () => {
    setIsAdded(!isAdded);
  };
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700 text-zinc-50 hover:bg-red-800"
      onClick={handleAddedCart}
    >
      <ShoppingCart className="h-5 w-5" />
    </button>
  );
}
