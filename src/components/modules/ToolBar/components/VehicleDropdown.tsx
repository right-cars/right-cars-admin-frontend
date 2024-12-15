"use client"
import { useMemo, useState } from "react";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import Image from "next/image";

import {useCars} from "@/providers/CarsContext";

export default function VehicleDropdown() {
  const [selectedKeys, setSelectedKeys] = useState<Set<"all" | string>>(new Set([]));
  const [isOpen, setIsOpen] = useState(false);

  // @ts-expect-error
  const {setType} = useCars();

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
          <p className="uppercase text-sm-extended font-bold">{selectedValue ? selectedValue : "ALL VEHICLE"}</p>
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
        aria-label="Vehicle Options"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) => {
          setSelectedKeys(keys as Set<"all" | string>);
          //@ts-expect-error
          setType(keys.values().next().value);
        }}
      >
        <DropdownItem key="cars">CARS</DropdownItem>
        <DropdownItem key="bakkie">BAKKIE</DropdownItem>
        <DropdownItem key="commercial">COMMERCIAL</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
