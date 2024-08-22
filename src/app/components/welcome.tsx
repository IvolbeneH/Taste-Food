"use client";
import { useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Greeting from "./greeting";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { SearchInput } from "./search-input";
import { CartSheet } from "./cart-sheet";

export function Welcome() {
  const { data } = useSession();

  return (
    <div className="mt-4 flex w-full flex-col items-center justify-start md:hidden">
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
              <CartSheet />
            </div>
          </div>
        </div>
      )}
      <SearchInput />
    </div>
  );
}
