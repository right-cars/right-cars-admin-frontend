import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import DeleteModal from "@/components/common/modals/DeleteModal";

export default function ActionsDropdown() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
          <DropdownItem key="reserved">Mark as reserved</DropdownItem>
          <DropdownItem key="archive">Archive</DropdownItem>
          <DropdownItem key="delete" onPress={onOpen}>
            <p className="text-[#F31260]">Delete</p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <DeleteModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
