"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

export function Favorited() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <button
      className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
        isFavorited
          ? "bg-red-700 text-zinc-50"
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
