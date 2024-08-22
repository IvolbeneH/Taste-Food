import { RestaurantItem } from "../components/restaurant-item";
import { Header } from "../components/header";
import { db } from "../lib/prisma";
import { SearchInput } from "../components/search-input";

interface RestaurantPageProps {
  searchParams: {
    search?: string;
  };
}
export default async function RestaurantPage({
  searchParams,
}: RestaurantPageProps) {
  const restaurant = await db.restaurant.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: "insensitive",
      },
    },
  });
  return (
    <div>
      <Header />
      <div>
        <div className="mt-4 md:hidden">
          <SearchInput />
        </div>
        <h2 className="mb-3 mt-6 px-3 text-xs font-bold uppercase text-zinc-500 md:text-sm">
          Resultados para &quot;{searchParams?.search}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4 px-3">
          {restaurant.map((restaurant) => (
            <RestaurantItem restaurant={restaurant} key={restaurant.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
