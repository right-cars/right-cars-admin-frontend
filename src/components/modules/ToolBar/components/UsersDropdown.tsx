"use client"
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function UsersDropdown() {
  const [selectedKeys, setSelectedKeys] = useState<Set<"all" | string>>(new Set([]));
  const [isOpen, setIsOpen] = useState(false);

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown
      onOpenChange={(open) => setIsOpen(open)} 
    >
      <DropdownTrigger>
        <Button variant="light" className="w-[149px] flex items-center gap-[8px]">
          <p className="uppercase text-sm-extended font-bold">{selectedValue ? selectedValue : "ALL USERS"}</p>
          <Image
            src="/icons/toolbar/arrow-down.svg"
            alt="icon"
            width={24}
            height={24}
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Users Options"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => setSelectedKeys(keys as Set<"all" | string>)}
      >
        <DropdownItem key="verified">VERIFIED</DropdownItem>
        <DropdownItem key="in progress">IN PROGRESS</DropdownItem>
        <DropdownItem key="no documents">NO DOCUMENTS</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
