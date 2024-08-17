"use client";

import { AlignRight, Home, LogIn, ShoppingCart, Truck } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { SearchType } from "./search-type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { SheetRepeat } from "./sheet-repeat";

export function Header() {
  return (
    <header className="flex w-full justify-between bg-zinc-50 p-6 shadow-md">
      <Link href="/" className="mt-2">
        <div className="flex items-center gap-2">
          <Truck className="h-7 w-7 text-red-700" />
          <h1 className="text-lg font-bold text-red-700">Taste Food</h1>
        </div>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="hover:bg-zinc-200">
            <AlignRight />
          </Button>
        </SheetTrigger>
        <SheetRepeat />
      </Sheet>
    </header>
  );
}
