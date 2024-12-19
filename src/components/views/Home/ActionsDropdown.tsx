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

// @ts-expect-error
const getItems = (status, onUpdateStatus)=> {
    if(status === "active")
        return (
            <>
                <DropdownItem key="reserved" onPress={()=> onUpdateStatus("deposit")}>Mark as reserved</DropdownItem>
                <DropdownItem key="archive" onPress={()=> onUpdateStatus("archive")}>Archive</DropdownItem>
            </>
        );
    if(status === "deposit")
        return (
            <>
                <DropdownItem key="active" onPress={()=> onUpdateStatus("active")}>Remove from reserve</DropdownItem>
                <DropdownItem key="archive" onPress={()=> onUpdateStatus("archive")}>Archive</DropdownItem>
            </>
        );
    return (
        <>
            <DropdownItem key="reserved" onPress={()=> onUpdateStatus("deposit")}>Mark as reserved</DropdownItem>
            <DropdownItem key="active" onPress={()=> onUpdateStatus("active")}>Active</DropdownItem>
        </>
    );
}

//@ts-expect-error
export default function ActionsDropdown({status, id}) {
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

    // @ts-ignore
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
            {getItems(status, onUpdateStatus)}
          <DropdownItem key="delete" onPress={onOpen}>
            <p className="text-[#F31260]">Delete</p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <DeleteModal isOpen={isOpen} onOpenChange={onDelete} />
    </>
  );
}
