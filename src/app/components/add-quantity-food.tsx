import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { DialogContent } from "./ui/dialog";
import { RestaurantService } from "@prisma/client";
import Image from "next/image";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

interface AddQuantityFoodProps {
  service: RestaurantService;
}

export function AddQuantityFood({ service }: AddQuantityFoodProps) {
  const [isAdded, setIsAdded] = useState(false);

  const { data } = useSession();

  const handleAddedCart = () => {
    if (!data?.user) {
      toast.error("Você precisa estar logado para comprar.");
      return;
    }

    setIsAdded(!isAdded);
    toast.success("Adicionado ao carrinho com sucesso!");
  };

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  function priceWithQuantity() {
    const prince = Number(service.price);
    const result = prince * quantity;
    return result;
  }

  return (
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
              Preço do prato:{" "}
              <span className="font-bold">
                {priceWithQuantity().toFixed(2).replace(".", ",")}
              </span>
            </h2>
            <div className="flex flex-col">
              <span className="text-sm text-zinc-600">
                Total: {priceWithQuantity().toFixed(2).replace(".", ",")}
              </span>
              <span className="text-sm text-zinc-600">Descontos: 0,00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <span className="font-semibold">Quantidade</span>
        </div>
        <div className="flex w-full items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={decrement}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <span
            className="w-fit min-w-4 text-lg font-medium"
            onChange={handleChange}
          >
            {quantity}
          </span>
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={increment}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            className="ml-auto flex h-8 items-center justify-center gap-1 rounded-lg bg-red-600 text-xs text-zinc-50 hover:bg-red-700"
            size="sm"
            onClick={handleAddedCart}
          >
            <ShoppingCart className="h-4 w-4 fill-current" />
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}
