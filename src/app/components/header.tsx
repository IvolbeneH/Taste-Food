"use client";

import { AlignRight, LogOut, Settings, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { SheetRepeat } from "./sheet-repeat";
import { ThemeButton } from "./theme-button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import { SearchInput } from "./search-input";
import { CartSheet } from "./cart-sheet";

export function Header() {
  const { data } = useSession();

  const handleLogout = () => {
    signOut();
  };
  function handleLoginWithFacebook() {
    signIn("facebook");
  }
  function handleLoginWithGoogle() {
    signIn("google");
  }

  return (
    <header className="flex w-full items-center justify-between bg-zinc-50 p-5 shadow-md">
      <Link href="/" className="mt-2">
        <div className="flex items-center gap-2 rounded-md">
          <Truck className="h-6 w-6 fill-current text-red-600" />
          <h1 className="font-bold text-red-600">Taste Food</h1>
        </div>
      </Link>
      <div className="hidden w-3/4 items-center justify-center md:flex">
        <SearchInput />
      </div>
      <div className="hidden gap-3 md:flex">
        {/* <ThemeButton /> */}
        <CartSheet />
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="border-2 border-blue-600 border-opacity-30">
                <AvatarImage src={data?.user?.image ?? ""} />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-8 w-48">
              <DropdownMenuLabel className="flex flex-col">
                {data?.user?.name}
                <span className="text-xs text-zinc-500">
                  {data?.user?.email}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center justify-between">
                Settings
                <Settings className="h-4 w-4 text-zinc-950" />
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center justify-between"
                onClick={handleLogout}
              >
                Logout
                <LogOut className="h-4 w-4 text-zinc-950" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="flex w-[80%] flex-col items-center justify-center rounded-lg bg-zinc-50">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Faça login na plataforma!
                </DialogTitle>
                <DialogDescription className="text-zinc-500">
                  Com o login sua experiência fica excelente!
                </DialogDescription>
              </DialogHeader>
              <div className="flex w-full items-center justify-center gap-3">
                <Button className="bg-red-600 hover:bg-zinc-600" size="icon">
                  <Image
                    src="/google.svg"
                    alt="Login com google"
                    height={18}
                    width={18}
                    onClick={handleLoginWithGoogle}
                  />
                </Button>
                <Button className="bg-blue-700 hover:bg-zinc-600" size="icon">
                  <Image
                    src="/facebook.svg"
                    alt="Login com facebook"
                    height={18}
                    width={18}
                    onClick={handleLoginWithFacebook}
                  />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
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
