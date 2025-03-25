import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface TableData {
  tabTitle: string[];
  children: React.ReactNode;
}

const TabsComponent: React.FC<TableData> = ({ tabTitle, children }) => {
  return (
    <Tabs defaultValue="tab-1" className="items-center">
      <TabsList className="text-foreground h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1">
        {tabTitle.map((item, index) => (
          <TabsTrigger
            key={index}
            value={`tab-${index + 1}`}
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            {item}
          </TabsTrigger>
        ))}
        {/* <TabsTrigger
          value="tab-1"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Tab 1
        </TabsTrigger> */}
        {/* <TabsTrigger
          value="tab-2"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Tab 2
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Tab 3
        </TabsTrigger> */}
      </TabsList>
      {children}
      {/* <TabsContent value="tab-1">
        <p className="text-muted-foreground p-4 text-center text-xs">
          Content for Tab 1
        </p>
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
      </TabsContent> */}
    </Tabs>
  );
};

export default TabsComponent;
