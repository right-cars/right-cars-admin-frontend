"use client";

import { useMemo, useState } from "react";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Button } from "@nextui-org/react";
import Image from "next/image";

import {useCars} from "@/providers/CarsContext";

const selectValues = ["all", "car", "bakkie", "commercial"];

export default function VehicleDropdown() {
  // const [selectedKeys, setSelectedKeys] = useState<Set<"all" | string>>(new Set([]));
  const [isOpen, setIsOpen] = useState(false);

  // @ts-expect-error
  const {vehicleCategory, setVehicleCategory} = useCars();

  // const selectedValue = useMemo(
  //   () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
  //   [selectedKeys]
  // );

  const values = selectValues.filter(item => item !== vehicleCategory);
  return (
    <Dropdown
      onOpenChange={(open) => setIsOpen(open)}
    >
      <DropdownTrigger>
        <Button variant="light" className="w-[149px] flex items-center gap-[8px]">
          <p className="uppercase text-sm-extended font-bold">{(vehicleCategory === "all") ? "ALL VEHILCLES" : vehicleCategory}</p>
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
        selectedKeys={[vehicleCategory]}
        onSelectionChange={(keys) => {
          // setSelectedKeys(keys as Set<"all" | string>);
          //@ts-expect-error
          setVehicleCategory(keys.values().next().value);
        }}
      >
        {values.map(item => <DropdownItem key={item}>{item.toUpperCase()}</DropdownItem>)}
        {/*<DropdownItem key="all">ALL</DropdownItem>*/}
        {/*<DropdownItem key="car">CARS</DropdownItem>*/}
        {/*<DropdownItem key="bakkie">BAKKIE</DropdownItem>*/}
        {/*<DropdownItem key="commercial">COMMERCIAL</DropdownItem>*/}
      </DropdownMenu>
    </Dropdown>
  );
}
