import { ProjectContents } from "@/components/tabs/projectContents";
import TabsComponent from "@/components/tabs/tabscustom";

export default function Projects() {
  const tabTitles = ["Tab1", "Tab2", "Tab3"];

  return (
    <TabsComponent tabTitle={tabTitles}>
      <ProjectContents />
    </TabsComponent>
  );
}
