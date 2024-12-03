"use client"
import { Input } from "@nextui-org/react";
import Image from "next/image";

export default function SearchInput() {
  return (
    <Input
      isClearable
      className="w-[304px] h-10"
      classNames={{ inputWrapper: "border border-lightGray" }}
      radius="full"
      placeholder="Type to search..."
      aria-label="Search"
      startContent={
        <Image
          src="/icons/toolbar/search.svg"
          alt="search icon"
          width={24}
          height={24}
          className="flex-shrink-0"
        />
      }
    />
  );
}
