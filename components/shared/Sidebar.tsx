import { routes } from "@/lib/routes";
import React from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div
      className="hidden md:flex md:w-24 lg:w-64 px-2 py-12  flex-col gap-y-4 overflow-y-auto border-r border-slate-50/10 bg-slate-900 "
      style={{
        height: "calc(100vh - 100px)",
      }}
    >
      {routes.map((route) => (
        <SidebarItem key={route.path} {...route} />
      ))}
    </div>
  );
};

export default Sidebar;
