"use client";
import { useDispatch } from "react-redux";
import { handleShow } from "../../redux/slices/notification.redux";
import { Button } from "../ui/button";
import { TabsContent } from "../ui/tabs";

function ProjectContents() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      handleShow({
        type: "destructive",
        title: "Warning!",
        description: "This notification will disappear in 10 seconds.",
        isVisible: true,
      })
    );
  };
  return (
    <>
      <TabsContent value="tab-1">
        <Button onClick={handleClick}>Show Toast</Button>
      </TabsContent>
      <TabsContent value="tab-2">
        <p className="text-muted-foreground p-4 text-center text-xs">
          Content for Tab 2
        </p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p className="text-muted-foreground p-4 text-center text-xs">
          Content for Tab 3
        </p>
      </TabsContent>
    </>
  );
}

export { ProjectContents };
