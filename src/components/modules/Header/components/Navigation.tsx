import { usePathname } from "next/navigation";
import { Link, NavbarContent, NavbarItem } from "@nextui-org/react";
import { navItems } from "./navItems";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <NavbarContent className="flex gap-14">
      {navItems.map(({ text, href, img }, index) => {
        const isActive = pathname === href;
        return (
          <NavbarItem key={index}>
            <Link
              href={href}
              color={`${isActive ? "primary" : "foreground"}`}
              className="flex items-center gap-2"
              aria-current={pathname === href ? "page" : undefined}
            >
              <div
                className={`w-6 h-6 ${
                  isActive ? "text-primary" : "text-foreground"
                }`}
              >
                {img}
              </div>

              <p className="font-metrophobic leading-[1.5]">{text}</p>
            </Link>
          </NavbarItem>
        );
      })}
    </NavbarContent>
  );
}
