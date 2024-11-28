"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isAuthPage = pathname === "/sign-in";

  if (isAuthPage) {
    return null;
  }

  return <header>header</header>;
}
