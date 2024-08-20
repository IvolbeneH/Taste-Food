import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Restaurant, RestaurantService } from "@prisma/client";
import { AddToCart } from "./add-to-cart";

interface PopularFoodsProps {
  service: RestaurantService;
  restaurant: Restaurant;
}

export async function PopularFoods({ service, restaurant }: PopularFoodsProps) {
  return (
    <Card>
      <CardContent className="flex h-32 w-full items-center p-0">
        <div className="ml-4 flex min-h-[102px] min-w-[102px] items-center">
          <Image
            src={service.imageUrl}
            alt={service.name}
            width={102}
            height={102}
          />
        </div>
        <div className="ml-2 flex w-40 flex-col gap-1">
          <h2 className="font-semibold">{service.name}</h2>
          <p className="max-h-16 text-xs text-zinc-600">
            {service.description}
          </p>
          <span className="text-sm font-bold text-red-600">
            R$ {Number(service.price).toFixed(2).replace(".", ",")}
          </span>
        </div>
        <div className="mb-2 mt-auto">
          <AddToCart
            restaurant={restaurant}
            service={service}
            key={service.id}
          />
        </div>
      </CardContent>
    </Card>
  );
}
