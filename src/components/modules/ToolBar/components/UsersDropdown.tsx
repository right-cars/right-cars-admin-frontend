"use client"
import { useMemo, useState } from "react";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import Image from "next/image";

import {useUsers} from "@/providers/UsersContext";

const selectValues = ["all", "verified", "inProgress", "unverified"];

export default function UsersDropdown() {
  // const [selectedKeys, setSelectedKeys] = useState<Set<"all" | string>>(new Set([]));
  const [isOpen, setIsOpen] = useState(false);
  //@ts-expect-error
  const {status, setStatus} = useUsers();
  // const selectedValue = useMemo(
  //   () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
  //   [selectedKeys]
  // );
  const values = selectValues.filter(item => item !== status);
  return (
    <Dropdown
      onOpenChange={(open) => setIsOpen(open)}
    >
      <DropdownTrigger>
        <Button variant="light" className="w-[149px] flex items-center gap-[8px]">
          <p className="uppercase text-sm-extended font-bold">{status === "all" ? "ALL USERS" : status }</p>
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
        selectedKeys={[status]}
        onSelectionChange={(keys) => {
          //@ts-expect-error
          setStatus(keys.values().next().value);
        }}
      >
        {values.map(item => <DropdownItem key={item}>{item.toUpperCase()}</DropdownItem>)}
        {/*<DropdownItem key="verified">VERIFIED</DropdownItem>*/}
        {/*<DropdownItem key="inProgress">IN PROGRESS</DropdownItem>*/}
        {/*<DropdownItem key="unverified">UNVERIFIED</DropdownItem>*/}
      </DropdownMenu>
    </Dropdown>
  );
}
