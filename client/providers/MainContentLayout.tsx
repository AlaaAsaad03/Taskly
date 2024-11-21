"use client";
import { useUserContext } from "@/context/userContext";
import React from "react";

interface MainContentLayoutProps {
  children: React.ReactNode;
  className?: string; // Add className as an optional prop
}

function MainContentLayout({ children, className }: MainContentLayoutProps) {
  const userId = useUserContext().user._id;
  return (
    <main
      className={`${
        userId ? "pr-[20rem]" : ""
      } pb-[1.5rem] flex h-full ${className}`}
    >
      {children}
    </main>
  );
}

export default MainContentLayout;
