import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { items } from "@/lib/menu-data";
export default function AppSidebar() {
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
