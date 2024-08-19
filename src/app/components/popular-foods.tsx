import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { RestaurantService } from "@prisma/client";
import { AddToCart } from "./add-to-cart";

interface PopularFoodsProps {
  service: RestaurantService;
}

export async function PopularFoods({ service }: PopularFoodsProps) {
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
        <div className="ml-2 flex w-48 flex-col gap-1 p-2">
          <h2 className="font-semibold">{service.name}</h2>
          <p className="max-h-16 text-sm text-zinc-600">
            {service.description}
          </p>
          <span className="font-bold text-red-600">
            R$ {Number(service.price)}
          </span>
        </div>
        <div className="mb-2 ml-4 mt-auto">
          <AddToCart />
        </div>
      </CardContent>
    </Card>
  );
}
