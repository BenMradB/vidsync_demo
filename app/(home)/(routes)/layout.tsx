import { Header, Sidebar } from "@/components/shared";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col ">
      <Header />
      <div className="flex gap-x-10">
        <Sidebar />
        <div
          className="flex-1 w-full py-12 overflow-y-auto"
          style={{
            height: "calc(100vh - 100px)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
