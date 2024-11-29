import { NavbarItem } from "@nextui-org/react";

export default function UserInfo() {
  return (
    <NavbarItem className="flex gap-[8px] items-center grow-0">
      <div className="rounded-full bg-lightGray w-10 h-10 flex justify-center items-center text-xs leading-[1.33]">
        AD
      </div>
      <p className="font-metrophobic leading-[1.5]">Admin</p>
    </NavbarItem>
  );
}
