"use client";

import React from "react"; // ✅ Import React to use React.Fragment
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function DynamicBreadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <span className="text-gray-500">{decodeURIComponent(segment)}</span>
                ) : (
                  <BreadcrumbLink href={href}>
                    {decodeURIComponent(segment)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
