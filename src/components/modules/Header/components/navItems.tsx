import { AutoSvg } from "../../../../../public/icons/header/AutoSvg";
import { UserSvg } from "../../../../../public/icons/header/User";
import { CreateAutoSvg } from "../../../../../public/icons/header/CraeteAutoSvg";
import { AuctionSvg } from "../../../../../public/icons/header/AuctionSvg";

export const navItems = [
  {
    img: <AutoSvg />,
    href: "/",
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