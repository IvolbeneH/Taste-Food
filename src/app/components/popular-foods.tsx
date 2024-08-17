import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { RestaurantService } from "@prisma/client";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import { db } from "../lib/prisma";
interface PopularFoodsProps {
  service: RestaurantService;
}

export async function PopularFoods({ service }: PopularFoodsProps) {
  const services = await db.restaurant.findMany({
    include: {
      services: true,
    },
  });

  return (
    <Card>
      <CardContent className="flex h-32 w-full p-0">
        <div className="relative ml-4 flex items-center">
          <div className="flex flex-col gap-2">
            <Image
              src={service.imageUrl}
              alt={service.name}
              width={102}
              height={102}
            />
            <Badge className="absolute left-[-6px] top-3 flex gap-1 bg-[#3d1c1cb2] bg-opacity-70 px-2 hover:bg-violet-400 hover:bg-opacity-50">
              <StarIcon className="fill-red-700 text-red-700" size={14} />
              <span className="font-normal">5,0</span>
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
