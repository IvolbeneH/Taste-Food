import Image from "next/image";
import { Header } from "./components/header";
import { RestaurantItem } from "./components/restaurant-item";
import { db } from "./lib/prisma";
import { quickSearchOption } from "./_constants/option";
import { Button } from "./components/ui/button";
import { Welcome } from "./components/welcome";

export default async function Home() {
  const restaurants = await db.restaurant.findMany({});
  return (
    <div>
      <Header />
      <Welcome />
      <div className="mt-2 flex w-full items-center gap-2 overflow-x-scroll px-3 pt-2 lg:hidden [&::-webkit-scrollbar]:hidden">
        {quickSearchOption.map((option) => (
          <Button
            className="flex h-20 min-w-[7.4rem] flex-col gap-2 bg-zinc-100 px-6 hover:bg-zinc-300"
            variant="secondary"
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
      <div className="relative mt-6 h-[200px] w-full lg:hidden">
        <Image
          src="/banner.svg"
          fill
          className="rounded-xl object-cover px-2"
          alt="Agende nos melhores com FSW Barber"
        />
      </div>
      <h1 className="ml-3 mt-4 text-xl font-bold">Restaurantes</h1>
      <div className="flex gap-4 overflow-x-auto p-2 pb-5 [&::-webkit-scrollbar]:hidden">
        {restaurants.map((restaurants) => (
          <RestaurantItem restaurant={restaurants} key={restaurants.id} />
        ))}
      </div>
    </div>
  );
}
