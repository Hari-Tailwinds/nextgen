"use client";
import { EnvironmentContents } from "@/components/tabs/environmnetContent";
import TabsComponent from "@/components/tabs/tabscustom";

export default function Environment() {
  const tabTitles = ["Tab1", "Tab2", "Tab3"];
  return (
    <TabsComponent tabTitle={tabTitles}>
      <EnvironmentContents />
    </TabsComponent>
  );
}
