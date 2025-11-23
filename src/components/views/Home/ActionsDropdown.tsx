"use client";

// import { useRouter } from "next/navigation";
import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import DeleteModal from "@/components/common/modals/DeleteModal";

// import {useCars} from "@/providers/CarsContext";

//@ts-expect-error
export default function ActionsDropdown({deleteCar, updateCarStatus, id}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const router = useRouter();


  const onDelete = ()=> {
    deleteCar(id);
    onOpenChange();
  }

  const onUpdateStatus = ()=> {
    updateCarStatus(id);
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
            <DropdownItem key="reserved" onPress={onUpdateStatus}>move back to the marketplace</DropdownItem>
          <DropdownItem key="delete" onPress={onOpen}>
            <p className="text-[#F31260]">Delete for forever</p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <DeleteModal isOpen={isOpen} onOpenChange={onDelete} />
    </>
  );
}
