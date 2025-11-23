"use client"
import { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

import {useUsers} from "@/providers/UsersContext";

export default function UsersSortDropdown() {
  const [selectedKeys, setSelectedKeys] = useState<Set<"all" | string>>(
    new Set([])
  );

  //@ts-expect-error
  const {setSort} = useUsers();
  console.log(selectedKeys)
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
        onSelectionChange={(keys) => {
            setSelectedKeys(keys as Set<"" | string>);
            //@ts-expect-error
            setSort(keys.values().next().value);
          }
        }
      >
        <DropdownItem key='fullName'>BY NAME</DropdownItem>
        <DropdownItem key="date"> BY DATE OF ADDING</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
