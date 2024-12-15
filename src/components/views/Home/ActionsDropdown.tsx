"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import DeleteModal from "@/components/common/modals/DeleteModal";

import {useCars} from "@/providers/CarsContext";

//@ts-expect-error
export default function ActionsDropdown({id}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // @ts-expect-error
  const {deleteCar, updateCarStatus} = useCars();

  const onDelete = ()=> {
    deleteCar(id);
    onOpenChange();
  }

  const onUpdateStatus = (status: string)=> {
    updateCarStatus(id, status);
  }

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Image
            src="/icons/more-square.svg"
            alt="icon"
            width={24}
            height={24}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Options"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
        >
          <DropdownItem key="reserved" onPress={()=> onUpdateStatus("deposit")}>Mark as reserved</DropdownItem>
          <DropdownItem key="archive" onPress={()=> onUpdateStatus("archive")}>Archive</DropdownItem>
          <DropdownItem key="delete" onPress={onOpen}>
            <p className="text-[#F31260]">Delete</p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <DeleteModal isOpen={isOpen} onOpenChange={onDelete} />
    </>
  );
}
