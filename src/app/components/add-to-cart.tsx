"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { RestaurantService } from "@prisma/client";
import Image from "next/image";
import { AddQuantityFood } from "./add-quantity-food";

interface AddToCartProps {
  service: RestaurantService;
}

export function AddToCart({ service }: AddToCartProps) {
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
      <AddQuantityFood key={service.id} service={service} />
    </Dialog>
  );
}
