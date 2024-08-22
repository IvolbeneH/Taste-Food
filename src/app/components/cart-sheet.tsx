import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

export function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="relative bg-zinc-50 hover:bg-slate-200">
          <ShoppingCart className="h-6 w-6 text-red-600" />
          <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-600">
            0
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
