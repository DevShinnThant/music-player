"use client";

import Sidebar from "./Sidebar";
import TopLayout from "./TopLayout";
import Playbar from "./PlayBar";
import { useMusicStore } from "@/lib/store/client/music";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentMusicId } = useMusicStore();

  return (
    <div className="max-width overflow-auto h-screen flex items-center">
      <Sidebar />
      <div className="relative bg-main w-full h-full flex flex-col">
        <TopLayout />
        <div className="px-7 h-[calc(100vh_-_100px)]">{children}</div>
        {currentMusicId !== null ? <Playbar /> : null}
      </div>
    </div>
  );
}
