import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function SortDropdown() {
  const [selectedKeys, setSelectedKeys] = useState<Set<"all" | string>>(
    new Set([])
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" className="w-[122px] flex items-center gap-[8px]">
          <p className="uppercase text-sm-extended font-bold">
            {selectedValue ? selectedValue : "SORT BY"}
          </p>
          <Image
            src="/icons/toolbar/sort.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Sort Options"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys) =>
          setSelectedKeys(keys as Set<"" | string>)
        }
      >
        <DropdownItem key="price">BY PRICE</DropdownItem>
        <DropdownItem key="date">BY DATE ADDED</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
