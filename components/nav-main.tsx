"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import { useState } from "react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,pathname
}: {
  items: {
    title: string;
    url?: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  pathname: string; 
}) {

  const [openCollapsible, setOpenCollapsible] = useState<string | null>(null);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url || item.items?.some((subItem) => pathname === subItem.url);
          const isOpen = openCollapsible === item.title;

          return item.url ? (
            <SidebarMenuItem key={item.title} className={isActive ? "bg-gray-200 dark:bg-gray-700 rounded-md " : ""}>
              <SidebarMenuButton tooltip={item.title} asChild>
                <a href={item.url} className={`flex items-center gap-2 ${isActive ? "text-primary font-semibold" : ""}`}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) : (
            <Collapsible
              key={item.title}
              asChild
              open={isOpen}
              onOpenChange={() => setOpenCollapsible(isOpen ? null : item.title)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title} className={isActive ? "text-primary font-semibold" : ""}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight
                      className={`ml-auto transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => {
                      const isSubActive = pathname === subItem.url;
                      return (
                        <SidebarMenuSubItem key={subItem.title} className={isSubActive ? "bg-gray-200 dark:bg-gray-700" : ""}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url} className={`flex items-center gap-2 ${isSubActive ? "text-primary font-semibold" : ""}`}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
