"use client";

import { toast } from "sonner";
import { Button } from "../ui/button";
import { TabsContent } from "../ui/tabs";

function EnvironmentContents() {
  return (
    <>
      <TabsContent value="tab-1">
        <Button
          onClick={() => {
            toast("Action Required", {
              description: "Do you want to continue?",
              action: {
                label: "Confirm",
                onClick: () => console.log("Confirmed!"),
              },
            });
          }}
        >
          Show Toast
        </Button>
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

export { EnvironmentContents };
