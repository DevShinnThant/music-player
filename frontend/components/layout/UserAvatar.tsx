"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { useGetCurrentUser } from "@/lib/store/server/auth/queries";
import { strapi } from "@/lib/store/server/strapi";
import { useRouter } from "next/navigation";

export default function UserAvatar() {
  const [opened, setOpened] = useState<boolean>(false);

  const router = useRouter();

  // Queries
  const { data } = useGetCurrentUser();

  const handleLogout = () => {
    strapi.logout();
    router.push("/auth/sign-in");
  };

  return (
    <DropdownMenu open={opened} onOpenChange={() => setOpened(!opened)}>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex pl-2 pr-3 items-center justify-between hover:bg-primary w-1/6 h-full bg-secondary border-none rounded-full"
          variant="outline"
          onClick={() => setOpened(!opened)}
        >
          <div className="flex items-center gap-2">
            <Avatar className="w-7 h-7 p-0">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="user image"
              />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="text-white text-xs">{data?.username}</div>
          </div>
          {opened ? (
            <ArrowDown2 size={12} color="white" />
          ) : (
            <ArrowUp2 size={12} color="white" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem>
          <Button onClick={handleLogout} className="w-full" size="sm">
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
