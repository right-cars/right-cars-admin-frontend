import { NavbarBrand } from "@nextui-org/react";
import Link from "next/link";

export default function Logo() {
  return (
    <NavbarBrand className="grow-0">
      <Link href={'/vehicles'} className="px-[23px] py-4 bg-lightGray">
        <p className="font-bold text-inherit font-metrophobic text-base">
          logo
        </p>
      </Link>
    </NavbarBrand>
  );
}
