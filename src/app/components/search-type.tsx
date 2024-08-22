"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

interface SearchTypeProps {
  title?: string;
  src: string;
  className?: string;
}

export function SearchType({ title, src }: SearchTypeProps) {
  return (
    <Link href={`/restaurant?search=${title}`}>
      <Button className="flex h-12 w-full items-center justify-start gap-4 rounded-lg bg-zinc-100 p-3 hover:bg-zinc-200">
        <Image src={src} alt="Icon type" width={28} height={28} />
        <span className="font-medium text-black">{title}</span>
      </Button>
    </Link>
  );
}
