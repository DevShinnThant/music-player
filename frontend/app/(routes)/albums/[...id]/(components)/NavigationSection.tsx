"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";

export default function NavigationSection() {
  const router = useRouter();

  return (
    <div className="absolute top-2 left-4 flex items-center gap-3">
      <Button
        variant="default"
        onClick={() => router.back()}
        className="cursor-pointer p-0 m-0 w-7 h-7 rounded-full flex items-center justify-center bg-black hover:bg-opacity-70 bg-opacity-40"
      >
        <ArrowLeft2 color="white" size={17} />
      </Button>
      <Button
        disabled
        className="cursor-not-allowed p-0 m-0 w-7 h-7 rounded-full flex items-center justify-center bg-black hover:bg-opacity-70 bg-opacity-40"
      >
        <ArrowRight2 color="white" size={17} />
      </Button>
    </div>
  );
}
