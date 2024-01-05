"use client";

import { Search } from "../ui/search-input";
import UserAvatar from "./UserAvatar";

export default function TopLayout() {
  return (
    <div className="w-full mt-7 px-7 h-[72px] pb-8">
      <div className="flex h-full items-center justify-between">
        <Search
          className="w-2/6"
          placeholder="Search tracks, albums, artitst..."
        />
        <UserAvatar />
      </div>
    </div>
  );
}
