"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Image from "next/image";
import {deleteCookie} from "cookies-next/client";

import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import UserInfo from "./components/UserInfo";

import {logout} from "@/api/admins";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const onLogout = async()=> {
    try {
      await logout();
      deleteCookie("role");
      router.push("/");
      // redirect("/");
    } catch (error) {
      // @ts-expect-error
      console.log(error.message);
    }
  }

  const isAuthPage = pathname === "/";

  if (isAuthPage) {
    return null;
  }

  return (
    <div className="bg-pureWhite shadow-custom">
      <Navbar
        shouldHideOnScroll
        className="bg-pureWhite max-w-[1600px] mx-auto px-[232px] pt-4 pb-[22px] navbar w-full"
      >
        <Logo />
        <Navigation />
        <NavbarContent className="flex items-center gap-4 grow-0">
          <UserInfo />
          <NavbarItem>
            <Button
              onPress={onLogout}
              variant="light"
              className="flex gap-[10px]"
            >
              <Image
                src="/icons/header/logout.svg"
                alt="logout icon"
                width={24}
                height={24}
              />
              <p className="font-metrophobic leading-[1.5]grow-0">Log Out</p>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
