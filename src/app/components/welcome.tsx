"use client";
import { useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Greeting from "./greeting";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { SearchInput } from "./search-input";

export function Welcome() {
  const { data } = useSession();

  return (
    <div className="mt-4 flex w-full flex-col items-center justify-start">
      {data?.user && (
        <div className="flex w-full items-center gap-2 p-3 pt-0">
          <div className="flex w-full items-center gap-2 rounded-lg bg-zinc-50 p-3">
            <Avatar>
              <AvatarImage
                src={data?.user?.image ?? ""}
                alt="Imagem do usuario"
              />
            </Avatar>
            <div className="flex flex-col">
              <p className="text-base font-normal">
                Olá, <span className="font-semibold">{data?.user?.name}!</span>
              </p>
              <Greeting />
            </div>
            <div className="ml-auto">
              <Button
                size="icon"
                className="relative bg-zinc-50 hover:bg-slate-200"
              >
                <ShoppingCart className="h-6 w-6 text-red-600" />
                <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      )}
      <SearchInput />
    </div>
  );
}
