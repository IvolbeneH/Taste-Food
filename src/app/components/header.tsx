"use client";

import { AlignRight, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { SheetRepeat } from "./sheet-repeat";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-zinc-50 p-5 shadow-md">
      <Link href="/" className="mt-2">
        <div className="flex items-center gap-2 rounded-md bg-red-600 p-3">
          <Truck className="h-6 w-6 text-white" />
          <h1 className="font-bold text-white">Taste Food</h1>
        </div>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="bg-red-600 text-zinc-50 hover:bg-red-700 hover:text-zinc-50"
          >
            <AlignRight />
          </Button>
        </SheetTrigger>
        <SheetRepeat />
      </Sheet>
    </header>
  );
}
