"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { routes } from "@/lib/routes";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="max-w-full h-24 px-6 py-12  flex items-center justify-between border-b border-slate-50/10 bg-slate-900">
      <Link
        href={"https://github.com/BenMradB/vidsync.git"}
        target="_blank"
        className="flex items-center gap-x-1"
      >
        <Image src={"/icons/logo.svg"} alt="Logo" width={50} height={50} />
        <h1 className="text-3xl font-bold">VidSync</h1>
      </Link>

      <nav className="flex items-center gap-x-4">
        <Link
          href="https://github.com/BenMradB/vidsync.git"
          target="_blank"
          className="hidden md:flex w-fit h-fit px-3 py-2  bg-black rounded-md  items-center gap-x-2 justify-center hover:opacity-70 transition-all duration-500 ease-in-out"
        >
          <Image src={"/icons/star.svg"} alt="Star" width={20} height={20} />
          <p className="font-bold capitalize hidden md:block">Give it a star</p>
        </Link>
        <Link
          target="_blank"
          href="https://github.com/BenMradB/vidsync.git"
          className="hidden md:flex w-[40px] h-[40px]  bg-black rounded-md  items-center gap-x-2 justify-center hover:opacity-70 transition-all duration-500 ease-in-out"
        >
          <Image
            src={"/icons/github.svg"}
            alt="GitHub"
            width={20}
            height={20}
          />
        </Link>

        <Link
          href="https://www.youtube.com/channel/UC578BNFWa7U1-NnZIfS2_BQ"
          target="_blank"
          className="hidden md:flex w-[40px] h-[40px]  bg-red-700 rounded-md  items-center gap-x-2 justify-center hover:opacity-70 transition-all duration-500 ease-in-out"
        >
          <Image
            src={"/icons/youtube.svg"}
            alt="Youtube"
            width={20}
            height={20}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/benmrad-bilel-a3a01122a"
          target="_blank"
          className="hidden md:flex w-[40px] h-[40px]  bg-[#0A66C2] rounded-md  items-center gap-x-2 justify-center hover:opacity-70 transition-all duration-500 ease-in-out"
        >
          <Image
            src={"/icons/linkedin.svg"}
            alt="Star"
            width={20}
            height={20}
          />
        </Link>

        <Avatar className=" w-16 h-full hidden md:block">
          <AvatarImage
            src="/images/profile.jpeg"
            alt="profile"
            className="object-cover"
          />
          <AvatarFallback>
            <Skeleton className="w-16 h-full rounded-lg" />
          </AvatarFallback>
        </Avatar>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" className="w-[40px] h-[40px]">
              <MenuIcon size={24} className="text-slate-50 flex-shrink-0" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="bg-slate-900 w-72 overflow-y-auto"
          >
            <div className="mt-10 flex flex-col gap-y-8">
              <div className="w-full flex items-center gap-x-2">
                <Avatar className=" w-16 h-full rounded-md">
                  <AvatarImage
                    src="/images/profile.jpeg"
                    alt="profile"
                    className="object-cover"
                  />
                  <AvatarFallback>
                    <Skeleton className="w-16 h-full rounded-full" />
                  </AvatarFallback>
                </Avatar>
                <div className="w-full flex flex-col gap-y-1">
                  <p className="text-lg text-slate-50 font-bold">
                    Benmrad Bilel
                  </p>
                  <span className="text-md font-semibold text-slate-300">
                    FullStack JS Developer
                  </span>
                </div>
              </div>
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`
                    w-full h-[30px] px-4 py-6 flex items-center  gap-x-3 rounded-md transition-all duration-500 ease-out
                    hover:bg-primaryColor text-slate-50
                    ${
                      pathname === route.path.toLocaleLowerCase()
                        ? "bg-primaryColor"
                        : ""
                    }
                  `}
                >
                  <Image
                    src={route.icon}
                    alt={route.label}
                    width={25}
                    height={25}
                  />
                  <p
                    className={`text-slate-50  text-lg font-semibold capitalize `}
                  >
                    {" "}
                    {route.label}
                  </p>
                </Link>
              ))}
              <Link
                href="https://github.com/BenMradB/vidsync.git"
                target="_blank"
                className="flex w-full h-[30px] px-2 py-6  bg-black rounded-md  items-center gap-x-2  hover:opacity-70 transition-all duration-500 ease-in-out"
              >
                <Image
                  src={"/icons/star.svg"}
                  alt="Star"
                  width={20}
                  height={20}
                />
                <p className="font-bold capitalize block">Give it a star</p>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/BenMradB/vidsync.git"
                className="flex w-full h-[30px] px-2 py-6 bg-black rounded-md  items-center gap-x-2 hover:opacity-70 transition-all duration-500 ease-in-out"
              >
                <Image
                  src={"/icons/github.svg"}
                  alt="GitHub"
                  width={20}
                  height={20}
                />
                <p className="font-bold capitalize block">Github Code</p>
              </Link>

              <Link
                href="https://www.youtube.com/channel/UC578BNFWa7U1-NnZIfS2_BQ"
                target="_blank"
                className="flex w-full h-[30px] px-2 py-6 bg-red-700 rounded-md  items-center gap-x-2  hover:opacity-70 transition-all duration-500 ease-in-out"
              >
                <Image
                  src={"/icons/youtube.svg"}
                  alt="Youtube"
                  width={20}
                  height={20}
                />
                <p className="font-bold capitalize block">Youtube</p>
              </Link>

              <Link
                href="https://www.linkedin.com/in/benmrad-bilel-a3a01122a"
                target="_blank"
                className="flex w-full h-[30px] px-2 py-6  bg-[#0A66C2] rounded-md  items-center gap-x-2  hover:opacity-70 transition-all duration-500 ease-in-out"
              >
                <Image
                  src={"/icons/linkedin.svg"}
                  alt="Star"
                  width={20}
                  height={20}
                />
                <p className="font-bold capitalize block">Linkedin</p>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
