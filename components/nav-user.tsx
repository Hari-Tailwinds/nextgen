"use client";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  LifeBuoy,
  LogOut,
  Send,
  SunMoon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Drawercustom from "./drawerright/drawercustom";
import { HelpDrawer } from "./drawerright/helper";
import { Badge } from "./ui/badge";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const [show, setShow] = useState<boolean>(false);
  const { setTheme, theme } = useTheme();
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={"Help"}
            onClick={() => setShow(true)}
            asChild
          >
            <div className="flex">
              <LifeBuoy />

              <span>{"help"}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={"Feedback"}
            // onClick={() => setShow(true)}
            asChild
          >
            <div className="flex">
              <Send />

              <span>{"Feedback"}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={"bottom"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.name}
                      </span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                  </div>
                  <div className="pr-3">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <Bell size={20} strokeWidth={0.5} />

                      <Badge className="absolute top-1 right-1 px-0 py-1 text-[10px] rounded-full w-[14px] h-[15px]">
                        1
                      </Badge>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              {/* <DropdownMenuSeparator /> */}
              {/* <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem> */}
              {/* </DropdownMenuGroup> */}
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BadgeCheck />
                  Setting
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    theme === "light" ? setTheme("dark") : setTheme("light")
                  }
                >
                  <SunMoon />
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </DropdownMenuItem>
                {/* <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem> */}
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
              {/* <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut />
                Log out
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
      <Drawercustom
        title="My Drawer"
        open={show}
        onClose={() => setShow(false)}
      >
        <HelpDrawer />
      </Drawercustom>
    </>
  );
}
