import { NextResponse, NextRequest } from 'next/server';

// 中间件在 next.config.js 中的 redirects 之后运行，但在渲染之前运行。
export function middleware(request: NextRequest) {
  const isAuthenticated = Math.random() > 0.5;

  // 如果用户已通过身份验证，继续正常处理
  if (isAuthenticated) {
    return NextResponse.next();
  }

  // 如果未通过身份验证，重定向到登录页面
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/dashboard/:path*',
};
