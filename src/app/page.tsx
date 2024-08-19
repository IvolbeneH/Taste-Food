import Image from "next/image";
import { Header } from "./components/header";
import { RestaurantItem } from "./components/restaurant-item";
import { db } from "./lib/prisma";
import { quickSearchOption } from "./_constants/option";
import { Button } from "./components/ui/button";
import { Welcome } from "./components/welcome";
import { PopularFoods } from "./components/popular-foods";
export default async function Home() {
  const restaurants = await db.restaurant.findMany({});

  const services = await db.restaurantService.findMany({
    take: 12,
  });
  return (
    <div>
      <Header />
      <Welcome />
      <div className="mt-2 flex w-full items-center gap-2 overflow-x-scroll px-3 pt-2 lg:hidden [&::-webkit-scrollbar]:hidden">
        {quickSearchOption.map((option) => (
          <Button
            className="flex h-20 min-w-[7.4rem] flex-col gap-2 bg-zinc-100 px-6 hover:bg-zinc-300"
            variant="secondary"
            key={option.title}
          >
            <Image
              src={option.imageUrl}
              alt={option.title}
              width={34}
              height={34}
            />
            <span className="font-semibold">{option.title}</span>
          </Button>
        ))}
      </div>
      <div className="relative mt-6 h-[150px] w-full lg:hidden">
        <Image
          src="/bannerr.png"
          fill
          className="rounded-xl object-cover px-2"
          alt="Agende nos melhores com FSW Barber"
        />
      </div>
      <div className="ml-3 flex items-center justify-between pt-2">
        <h1 className="text-xl font-bold">Restaurantes</h1>
        <Button variant="link" className="font-semibold text-red-600">
          Ver todos
        </Button>
      </div>
      <div className="flex gap-4 overflow-x-auto p-2 pb-5 [&::-webkit-scrollbar]:hidden">
        {restaurants.map((restaurants) => (
          <RestaurantItem restaurant={restaurants} key={restaurants.id} />
        ))}
      </div>
      <div className="ml-3 flex items-center justify-between pb-1">
        <h1 className="text-xl font-bold">Populares</h1>
        <Button variant="link" className="font-semibold text-red-600">
          Ver todos
        </Button>
      </div>
      <div className="flex flex-col gap-4 p-2 pb-5">
        {services.map((services) => (
          <PopularFoods key={services.id} service={services} />
        ))}
      </div>
    </div>
  );
}
