import { Favorited } from "@/app/components/favorited";
import { PopularFoods } from "@/app/components/popular-foods";
import { ReturnButton } from "@/app/components/return-button";
import { Card, CardContent } from "@/app/components/ui/card";
import { db } from "@/app/lib/prisma";
import { Truck } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <div className="relative h-64">
        <Image
          src={restaurant.imageUrl}
          alt="Foto do restaurante"
          fill
          className="object-cover"
        />
        <ReturnButton />
        <Favorited restaurant={restaurant} />
      </div>
      <div className="p-2">
        <h1 className="p-1 text-lg font-semibold">Sobre</h1>
        <Card className="mt-2">
          <CardContent className="flex h-28 w-full items-center gap-4 p-0">
            <Image
              src={restaurant.imageUrl}
              alt="Logo restaurante"
              width={120}
              height={120}
              className="ml-3 rounded-2xl object-cover"
            />
            <div className="flex w-48 flex-col gap-2 truncate">
              <h1 className="font-semibold">{restaurant.name}</h1>
              <span className="flex-wrap text-sm text-zinc-500">
                {restaurant.address}
              </span>
              <span className="flex items-center gap-1 text-sm font-medium">
                <Truck className="h-5 w-5 text-red-600" />
                Entregas grátis até 2km!
              </span>
            </div>
          </CardContent>
        </Card>
        <h1 className="mt-2 p-1 text-lg font-semibold">Pratos</h1>
        <div className="flex flex-col gap-2">
          {restaurant.services.map((service) => (
            <PopularFoods
              service={service}
              key={service.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
