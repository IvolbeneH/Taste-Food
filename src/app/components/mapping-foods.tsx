import { Restaurant } from "@prisma/client";
import { db } from "../lib/prisma";
import { PopularFoods } from "./popular-foods";

interface MappingFoodsProps {
  restaurant: Restaurant;
}

export async function MappingFoods({ restaurant }: MappingFoodsProps) {
  const services = await db.restaurantService.findMany({
    take: 12,
    distinct: ["name", "imageUrl"],
  });

  return (
    <div className="flex flex-col gap-4 p-2 pb-5 md:flex-row md:overflow-x-auto md:[&::-webkit-scrollbar]:hidden">
      {services.map((services) => (
        <PopularFoods
          key={services.id}
          service={services}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}
