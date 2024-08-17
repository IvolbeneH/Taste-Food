import { SheetRepeat } from "@/app/components/sheet-repeat";
import { Button } from "@/app/components/ui/button";
import { Sheet, SheetTrigger } from "@/app/components/ui/sheet";
import { db } from "@/app/lib/prisma";
import { AlignRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
        <Link href="/">
          <Button
            size="icon"
            className="absolute left-4 top-4 rounded-full bg-red-700 hover:bg-red-800"
          >
            <ChevronLeft className="h-6 w-6 text-zinc-50" />
          </Button>
        </Link>
        <Sheet>
          <SheetTrigger
            asChild
            className="absolute right-4 top-4 rounded-3xl bg-red-700 hover:bg-red-800"
          >
            <Button size="icon" variant="ghost" className="hover:bg-zinc-200">
              <AlignRight className="h-6 w-6 text-zinc-50" />
            </Button>
          </SheetTrigger>
          <SheetRepeat />
        </Sheet>
      </div>
    </div>
  );
}
