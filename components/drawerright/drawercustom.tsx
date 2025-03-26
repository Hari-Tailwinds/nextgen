"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { SquareArrowUpRight } from "lucide-react";
import React from "react";

interface DrawerProps {
  title?: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Drawercustom: React.FC<DrawerProps> = ({
  title,
  children,
  open,
  onClose,
}) => {
  return (
    <Drawer direction={"right"} open={open} onOpenChange={onClose}>
      <DrawerContent className="p-2 w-[60%]">
        <DrawerHeader className="p-2">
          <DrawerTitle className="">
            <div className="flex justify-between">
              <div>{title ? title : "Add Title"}</div>
              <div>
                <SquareArrowUpRight onClick={onClose} />
              </div>
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="p-2">{children}</div>
        {/* <DrawerFooter>
          <div className="flex justify-end gap-2">
            <Button>Submit</Button>
            <Button onClick={onClose}>Cancel</Button>
          </div>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default Drawercustom;
