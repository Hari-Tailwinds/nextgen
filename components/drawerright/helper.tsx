"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordiionCustom from "../accorfdian/accordionCustom";

function HelpDrawer() {
  const data = [
    {
      head: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      head: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      head: "Lorem ipsum dolor",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];

  return (
    <div className="mx-auto w-full ">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem
        perferendis itaque hic possimus nostrum voluptas deserunt odit,
        assumenda .
      </p>
      <div className="mx-auto w-full ">
        <AccordiionCustom
        // index={index}
        // head={item.head}
        // body={item.head}
        // key={index}
        >
          {data.map((item, index) => {
            return (
              <>
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger>{item.head}</AccordionTrigger>
                  <AccordionContent>{item.body}</AccordionContent>
                </AccordionItem>
              </>
            );
          })}
        </AccordiionCustom>
      </div>
    </div>
  );
}

export { HelpDrawer };
