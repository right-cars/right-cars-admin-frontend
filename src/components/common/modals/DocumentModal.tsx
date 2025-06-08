import {
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";

import {Image} from "@nextui-org/react";

interface ModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  src: string;
}

export default function DocumentModal({ isOpen, onOpenChange, src }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      placement="auto"
      onOpenChange={onOpenChange}
      className="flex items-center"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#18181BB2] backdrop-opacity-40 ",
        base: "",
        closeButton: "hidden",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalBody>
              <div className="flex flex-col items-center p-4 rounded border border-lightGray shadow-custom bg-pureWhite">
                <p className="text-[#F31260] font-metrophobic text-center">
                  <Image width={800} src={src} alt="document img" />
                </p>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
