// 미들웨어는 페이지 응답 전 단계에서 이루어진다
// 요청 -> 미들웨어 -> 응답

import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어 작동!");
  console.log("----------------------");
  console.log(userAgent(request));
  console.log("----------------------");

  // 요청받은 url 경로가 아닌, "/경로로 이동시키는 로직"
  return NextResponse.redirect(new URL("/", request.url));

  // if (request.nextUrl.pathname === "/chapter9") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // } else {
  //   return NextResponse.next();
  // }
}

// matcher에 해당하는 경우에만 미들웨어를 적용시킨다.
export const config = {
  matcher: "/chapter9",
};
