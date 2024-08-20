"use client";
import { Home, LogIn, Star } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SearchType } from "./search-type";
import { signIn, signOut, useSession } from "next-auth/react";

export function SheetRepeat() {
  const { data } = useSession();

  function handleLoginWithFacebook() {
    signIn("facebook");
  }
  function handleLoginWithGoogle() {
    signIn("google");
  }
  const handleLogout = () => signOut();
  return (
    <SheetContent className="flex flex-col bg-zinc-50">
      <SheetHeader>
        <SheetTitle className="ml-2 text-left text-zinc-950">Menu</SheetTitle>
      </SheetHeader>
      {/* LOGIN E INFOMRAÇÕES DO USUARIO */}
      {data?.user ? (
        <div className="flex items-center gap-2 border-b border-zinc-200 pb-4">
          <Avatar>
            <AvatarImage src={data.user.image || ""} />
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">{data.user.name}</span>
            <p className="text-xs font-light text-zinc-500">
              {data.user.email}
            </p>
          </div>
          <Button
            className="ml-auto bg-red-600"
            size="sm"
            onClick={handleLogout}
          >
            Sair
          </Button>
        </div>
      ) : (
        <div className="flex w-full items-center justify-between border-b p-3">
          <h1 className="font-semibold">Faça seu login.</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" size="icon" className="h-7 w-7">
                <LogIn className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[80%] rounded-lg bg-zinc-200">
              <DialogHeader>
                <DialogTitle>Faça login na plataforma!</DialogTitle>
                <DialogDescription>
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
        </div>
      )}
      {/* SELEÇÃO DE ITEMS */}
      <div className="flex w-full flex-col gap-2 border-b border-zinc-200 pb-3">
        <div>
          <Link href="/">
            <Button className="flex w-full items-center justify-start gap-2 bg-slate-100 text-zinc-950 hover:bg-slate-200">
              <Home className="h-5 w-5 text-red-600" />
              <span className="text-base font-semibold">Início</span>
            </Button>
          </Link>
        </div>
        <div>
          <Link href="/favorites">
            <Button className="flex w-full items-center justify-start gap-2 bg-slate-100 text-zinc-950 hover:bg-slate-200">
              <Star className="h-5 w-5 fill-current text-red-600" />
              <span className="text-base font-semibold">Favoritos</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b pb-4">
        <SearchType title="Fast Food" src="Hamburger.svg" />
        <SearchType title="Pizza" src="Pizza.svg" />
        <SearchType title="Oriental" src="Sushi.svg" />
        <SearchType title="Frutos do mar" src="Scorpion.svg" />
      </div>
    </SheetContent>
  );
}
