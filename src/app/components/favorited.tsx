"use client";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Favorited() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);

    if (isFavorited === false) {
      toast.success("Restaurante colocado nos favoritos!");
    } else {
      return toast.error("Restaurante removido dos favoritos!");
    }
  };
  return (
    <button
      className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
        isFavorited
          ? "bg-red-600 text-zinc-50"
          : "hover: bg-zinc-700 text-zinc-300"
      }`}
      onClick={handleClick}
    >
      <Heart
        className={`h-5 w-5 ${isFavorited ? "fill-current" : "bg-none"}`}
      />
    </button>
  );
}
