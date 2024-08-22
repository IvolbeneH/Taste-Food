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

    if (!savedFavorite) {
      localStorage.removeItem(`isFavorited-${restaurant.id}`);
      return false;
    }

    try {
      return JSON.parse(savedFavorite);
    } catch (error) {
      console.error("Erro ao fazer parse do JSON:", error);
      localStorage.removeItem(`isFavorited-${restaurant.id}`);
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      `isFavorited-${restaurant.id}`,
      JSON.stringify(isFavorited),
    );
  }, [isFavorited, restaurant.id]);

  const handleClick = () => {
    const newFavoritedStatus = !isFavorited;
    setIsFavorited(newFavoritedStatus);

    if (newFavoritedStatus) {
      toast.success("Restaurante colocado nos favoritos!");
    } else {
      toast.error("Restaurante removido dos favoritos!");
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
