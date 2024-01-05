"use client";

import React from "react";
import Sidebar from "./Sidebar";
import TopLayout from "./TopLayout";
import Playbar from "./PlayBar";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-width h-screen flex items-center">
      <Sidebar />
      <div className="relative bg-main w-full h-full flex flex-col">
        <TopLayout />
        <div className="px-7 flex-1 overflow-y-scroll">{children}</div>
        <Playbar />
      </div>
    </div>
  );
}
