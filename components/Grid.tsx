import SideNavigation from "@/components/SideNavigation";
import { Sidebar } from "@/components/Sidebar";
import React from "react";

export const Grid = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 grid-rows-8 gap-4 h-screen  bg-gradient-to-b from-purple-100 to-blue-100">
      <div className="col-span-2 row-span-8 ml-4 my-4">
        <SideNavigation />
      </div>
      <div className="col-span-3 row-span-8 col-start-10 row-start-1">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};
