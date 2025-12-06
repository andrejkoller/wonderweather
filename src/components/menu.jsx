"use client";

import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const ICON_SIZE = 40;

export const Menu = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[375px] h-screen z-[100] ${
        isOpen ? "block" : "hidden"
      }`}
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="flex flex-col justify-start items-center h-full w-full">
        <div className="flex flex-row justify-between items-center h-24 w-full">
          <div
            id="closeIcon"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon sx={{ fontSize: ICON_SIZE }} />
          </div>
        </div>
        <div className="flex flex-col h-full w-full text-center">
          <ul>
            <li className="my-8 text-5xl">
              <Link href="/">Home</Link>
            </li>
            <li className="my-8 text-5xl">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="my-8 text-5xl">
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
