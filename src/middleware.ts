//import { anonymousMiddleware, authMiddleware } from "@app/_middleware/auth";
// import { pathMiddleware } from "@/_middleware/locale";
//import { isAnonymousPath, isPublicPath } from "@app/_utilities/helpers/path";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  // const res = pathMiddleware(request);
  // if (res) return res;
  //   if (isPublicPath(pathname, activeLocale)) {
  //     return NextResponse.next();
  //   }
  //   if (isAnonymousPath(pathname, activeLocale)) {
  //     return anonymousMiddleware(request);
  //   }
  //   return authMiddleware(request);
}
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
