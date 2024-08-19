"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

export function ReturnButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button
      size="icon"
      className="absolute left-4 top-4 rounded-full bg-zinc-700 hover:bg-red-600"
      onClick={handleGoBack}
    >
      <ChevronLeft className="h-6 w-6 text-zinc-50" />
    </Button>
  );
}
