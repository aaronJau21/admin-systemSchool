import { NavLink, Outlet } from "react-router";

import LogoSystem from "@/assets/logo.webp";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CollapsibleConfiguration } from "./components";
import { routes } from "@/App";
import { Navbar } from "./components/Navbar";
// import { useEffect } from "react";

export const MainLayout = () => {
  const routesNav = routes;
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="">
        <SidebarHeader>
          <NavLink to="/dashboard" className="flex justify-center">
            <img src={LogoSystem} alt="Logo" className="w-36" />
          </NavLink>
        </SidebarHeader>
        <SidebarContent>
          {/* Collapsible Configuration*/}
          <CollapsibleConfiguration routes={routesNav[1]} />
          {/* Collapsible Configuration*/}
        </SidebarContent>
      </Sidebar>
      <main className="flex-1">
        <div className="flex flex-row justify-between items-center p-4 border-b border-gray-400 mb-5">
          <SidebarTrigger />
          <Navbar />
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
};
