import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
}

export default function SuccessModal({
  isOpen,
  onOpenChange,
  title,
}: ModalProps) {
    const pathname = usePathname();
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="flex items-center"
      classNames={{
        body: "pt-[60px]",
        backdrop: "bg-[#18181BB2] backdrop-opacity-40 ",
        base: "",
        closeButton: "hidden",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="px-6 w-full">
              <h2 className="text-[28px]  uppercase font-bold">
                {title}
                <br /> <span>{pathname === "/create-vehicle" ? "has been successfully added" : "has been successfully update"}</span>
              </h2>
            </ModalBody>
            <ModalFooter className="flex flex-col w-full pb-[60px]">
              <Button
                as={Link}
                href="/"
                radius="full"
                color="primary"
                onPress={onClose}
              >
                View on the website
              </Button>
              <Button
                as={Link}
                href={pathname === "/create-vehicle" ? "/create-vehicle" : "/vehicles"}
                radius="full"
                color="primary"
                variant="bordered"
                onPress={onClose}
                className="bordered-button"
              >
                  {pathname === "/create-vehicle" ? "Add another vehicle" : "Back to vehicle list"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
