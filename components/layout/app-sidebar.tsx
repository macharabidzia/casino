import {
  Calendar,
  Hamburger,
  HamburgerIcon,
  HammerIcon,
  Home,
  Inbox,
  MenuIcon,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { items, MenuItem } from "@/lib/menu-data";
export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="group">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="text-center">
              <SidebarMenuItem className="">
                <SidebarMenuButton asChild>
                  <SidebarTrigger className="flex justify-start"></SidebarTrigger>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {items.map((item, i) => (
                <SidebarMenuItem className="my-0" key={i}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center justify-start gap-3"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span
                        className="
                          overflow-hidden whitespace-nowrap
                          group-data-[state=collapsed]:w-0
                          group-data-[state=collapsed]:opacity-0
                          group-data-[state=collapsed]:invisible
                          transition-all duration-300 ease-in-out
                          group-data-[state=expanded]:w-auto
                          group-data-[state=expanded]:opacity-100
                          group-data-[state=expanded]:visible
                        "
                      >
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
