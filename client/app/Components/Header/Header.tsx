"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { github, moon, profile } from "@/utils/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks } = useTasks();

  const router = useRouter();
  const { name } = user;
  const userId = user._id;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="px-6 my-4 w-full flex flex-col sm:flex-row items-start justify-between bg-[#f9f9f9]">
      <div className="flex flex-col gap-4 sm:gap-0 sm:w-1/2">
        <h1 className="text-lg font-medium">
          <span role="img" aria-label="wave">
            👋
          </span>
          {userId ? `Welcome, ${name}!` : "Welcome to Taskfyer"}
        </h1>
        {userId && (
          <p className="text-sm">
            You have{" "}
            <span className="font-bold text-[#3aafae]">
              {activeTasks.length}
            </span>{" "}
            active tasks
          </p>
        )}
      </div>

      <div className="h-[50px] flex items-center gap-[10.4rem] sm:gap-4">
        <button
          className="px-8 py-3 bg-[#3aafae] text-white rounded-[50px]
          hover:bg-[#00A1F1] hover:text-white transition-all duration-200 ease-in-out"
          onClick={() => {
            if (userId) {
              openModalForAdd();
            } else {
              router.push("/login");
            }
          }}
        >
          {userId ? "Add a new Task" : "Login / Register"}
        </button>

        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/Maclinz/taskfyer"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            {github}
          </Link>
          <Link
            href="https://github.com/Maclinz/taskfyer"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            {moon}
          </Link>
          <Link
            href="https://github.com/Maclinz/taskfyer"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-purple-500 rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            {profile}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
