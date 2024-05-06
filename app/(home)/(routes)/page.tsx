import { PageHeader, TableOfContent } from "@/components/shared";
import React from "react";
import { routes, RouteType } from "@/lib/routes";
import Link from "next/link";
import Image from "next/image";

const subTitle = `
VidSync is a powerful React component designed to enhance the native HTML video player experience. With VidSync, you can seamlessly integrate advanced video playback features into your React applications, including multi-video support, intuitive keyboard shortcuts, and extensive customization options. Whether you're building a video gallery, an e-learning platform, or a multimedia presentation, VidSync empowers you to deliver a seamless and engaging video experience to your users. Try VidSync today and elevate your video playback to the next level!`;

const EmbeddedLink = ({ icon, label, path }: RouteType) => {
  return (
    <Link
      href={path}
      className="w-full h-fit px-6 py-5 rounded-md text-slate-50 font-bold text-xl 
      flex items-center gap-x-4
        transition-all duration-500 ease-in-out border border-white/10 hover:shadow-md hover:shadow-slate-900
      "
    >
      <Image src={icon} alt="Arrow Right" width={30} height={30} />

      {label}
    </Link>
  );
};

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <PageHeader title="Introduction" subTitle={subTitle} />
      <TableOfContent title="Getting Started">
        <div className="w-full flex flex-col gap-y-4">
          {routes.map((route) => (
            <EmbeddedLink key={route.path} {...route} />
          ))}
        </div>
      </TableOfContent>
    </div>
  );
};

export default HomePage;
