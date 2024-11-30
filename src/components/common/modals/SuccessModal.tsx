import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";

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
                <br /> <span>has been successfully added</span>
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
                href="/create-vehicle"
                radius="full"
                color="primary"
                variant="bordered"
                onPress={onClose}
                className="bordered-button"
              >
                Add another vehicle
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
