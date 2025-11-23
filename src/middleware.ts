import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const {pathname} = req.nextUrl;

    if (
        pathname.startsWith("/favicon") ||
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/static/') ||
        /\.(png|jpg|jpeg|gif|svg|ico|webp|ttf|otf|woff|woff2|eot|css|js)$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    const isAuthenticated = Boolean(req.cookies.get("role"));

    const isPublicRoute = req.nextUrl.pathname === "/";
    const isPrivateRoute = req.nextUrl.pathname !== "/";

    if (isPrivateRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    if (isPublicRoute && isAuthenticated) {
        return NextResponse.redirect(new URL('/vehicles', req.url));
    }

    return NextResponse.next();
}
