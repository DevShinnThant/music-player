"use client";

import React from "react";
import Sidebar from "./Sidebar";

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-width h-screen flex items-center">
      <Sidebar />
      <div className="bg-main w-full h-full">{children}</div>
    </div>
  );
}
