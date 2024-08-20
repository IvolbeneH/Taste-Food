"use client";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Restaurant, RestaurantService } from "@prisma/client";
import Image from "next/image";
import { AddQuantityFood } from "./add-quantity-food";

interface AddToCartProps {
  restaurant: Restaurant;
  service: RestaurantService;
}

export function AddToCart({ restaurant, service }: AddToCartProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="flex h-8 items-center justify-center gap-1 rounded-lg bg-red-600 text-xs text-zinc-50 hover:bg-red-700"
          size="sm"
        >
          Adicionar
          <ShoppingCart className="h-4 w-4 fill-current" />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex w-[90%] flex-col rounded-lg">
        <div className="flex flex-col gap-4">
          <h1 className="text-lg">
            Compra de <span className="text-lg font-bold">{service.name}</span>
          </h1>
          <div className="flex gap-4">
            <Image
              src={service.imageUrl}
              alt={service.name}
              width={102}
              height={102}
            />
            <div className="flex flex-col justify-evenly">
              <h2 className="flex items-center gap-1 font-medium">
                Preço:{" "}
                <span className="font-bold">
                  {Number(service.price).toFixed(2).replace(".", ",")}
                </span>
              </h2>
              <h2 className="flex items-center gap-1 font-medium">
                Quantidade: <span className="font-bold">1</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <span className="font-semibold">Colocar no carrinho.</span>
          </div>
          <AddQuantityFood />
        </div>
      </DialogContent>
    </Dialog>
  );
}
