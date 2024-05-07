"use client";
import { RouteType } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type SidebarItemProps = RouteType;

const SidebarItem = ({ path, label, icon }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path.toLocaleLowerCase();
  return (
    <Link
      href={path}
      className={`
        w-full h-[30px] px-4 py-6 flex items-center justify-center lg:justify-start gap-x-3 rounded-md transition-all duration-500 ease-out
        hover:bg-primaryColor text-slate-50
         ${isActive ? "bg-primaryColor" : ""}
      `}
    >
      <Image src={icon} alt={label} width={25} height={25} />
      <p
        className={`text-slate-50  text-lg font-semibold capitalize hidden lg:block`}
      >
        {" "}
        {label}
      </p>
    </Link>
  );
};

export default SidebarItem;
