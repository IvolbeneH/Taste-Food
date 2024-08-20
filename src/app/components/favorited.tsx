"use client";
import { Restaurant } from "@prisma/client";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface FavoritedProps {
  restaurant: Restaurant;
}

export function Favorited({ restaurant }: FavoritedProps) {
  const [isFavorited, setIsFavorited] = useState<boolean>(() => {
    const savedFavorite = localStorage.getItem(`isFavorited-${restaurant.id}`);

    return savedFavorite
      ? JSON.parse(savedFavorite)
      : localStorage.removeItem(`isFavorited-${restaurant.id}`);
  });

  useEffect(() => {
    localStorage.setItem(
      `isFavorited-${restaurant.id}`,
      JSON.stringify(isFavorited),
    );
  }, [isFavorited, restaurant.id]);

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
