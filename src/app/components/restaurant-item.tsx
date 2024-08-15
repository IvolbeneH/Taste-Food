import { Restaurant } from "@prisma/client";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

export function RestaurantItem({ restaurant }: RestaurantItemProps) {
  return (
    <div className="mt-2 flex w-full gap-2">
      <Card className="max-w-[165px] rounded-2xl">
        <CardContent className="p-0 px-2 pb-2 pt-2">
          <div className="relative h-[159px] w-full">
            <Image
              fill
              className="rounded-2xl object-cover"
              src={restaurant.imageUrl}
              alt={restaurant.name}
            />
            <Badge className="absolute left-2 top-2 flex gap-1 bg-[#3d1c1cb2] bg-opacity-70 px-2 hover:bg-violet-400 hover:bg-opacity-50">
              <StarIcon className="fill-red-700 text-red-700" size={14} />
              <span className="font-normal">5,0</span>
            </Badge>
          </div>
          <div className="px-1 py-3">
            <h3 className="truncate font-semibold">{restaurant.name}</h3>
            <p className="truncate text-sm text-gray-400">
              {restaurant.address}
            </p>
            <Button
              variant="secondary"
              className="mt-3 w-full bg-red-700 text-zinc-50 hover:bg-red-800"
            >
              Acessar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
