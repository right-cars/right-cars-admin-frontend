import { Link, NavbarContent, NavbarItem } from "@nextui-org/react";
import { AutoSvg } from "../../../../../public/icons/header/AutoSvg";
import { UserSvg } from "../../../../../public/icons/header/User";
import { CreateAutoSvg } from "../../../../../public/icons/header/CraeteAutoSvg";
import { AuctionSvg } from "../../../../../public/icons/header/AuctionSvg";
import { usePathname } from "next/navigation";

const navItems = [
  {
    img: <AutoSvg />,
    href: "/vehicles",
    text: "Vehicles",
  },
  {
    img: <UserSvg />,
    href: "/users",
    text: "Users",
  },
  {
    img: <CreateAutoSvg />,
    href: "/create-vehicle",
    text: "Add a Vehicle",
  },
  {
    img: <AuctionSvg />,
    href: "/auction",
    text: "Auction",
  },
];

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
