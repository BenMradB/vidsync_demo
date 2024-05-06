import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";

const Header = () => {
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
          className="w-fit h-fit px-3 py-2  bg-black rounded-md flex items-center gap-x-2 justify-center hover:opacity-70 transition-all duration-500 ease-in-out"
        >
          <Image src={"/icons/star.svg"} alt="Star" width={20} height={20} />
          <p className="font-bold capitalize">Give it a star</p>
        </Link>
        <Link
          target="_blank"
          href="https://github.com/BenMradB/vidsync.git"
          className="w-[40px] h-[40px]  bg-black rounded-md flex items-center gap-x-2 justify-center hover:opacity-70 transition-all duration-500 ease-in-out"
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
          className="w-[40px] h-[40px]  bg-red-700 rounded-md flex items-center gap-x-2 justify-center hover:opacity-70 transition-all duration-500 ease-in-out"
        >
          <Image
            src={"/icons/youtube.svg"}
            alt="Youtube"
            width={20}
            height={20}
          />
        </Link>

        <Link
          href="https://github.com/BenMradB/vidsync.git"
          target="_blank"
          className="w-[40px] h-[40px]  bg-[#0A66C2] rounded-md flex items-center gap-x-2 justify-center hover:opacity-70 transition-all duration-500 ease-in-out"
        >
          <Image
            src={"/icons/linkedin.svg"}
            alt="Star"
            width={20}
            height={20}
          />
        </Link>

        <Avatar className=" w-16 h-full">
          <AvatarImage src="/images/profile.jpeg" alt="profile" />
          <AvatarFallback>
            <Skeleton className="w-16 h-full rounded-lg" />
          </AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};

export default Header;
