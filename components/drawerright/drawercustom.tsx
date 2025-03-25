"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
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
      <DrawerContent className="p-2">
        <DrawerHeader className="p-2">
          <DrawerTitle className="p-2">
            {title ? title : "Add Title"}
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
