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
      <ModalContent style={{minWidth: "70vw"}}>
        {() => (
          <>
            <ModalBody className="w-full">
              <div className="flex w-full flex-col items-center p-4 rounded border border-lightGray shadow-custom bg-pureWhite">
                  {src.split(".").pop() === "pdf" ? <iframe className="w-full h-[80vh]" src={src}></iframe> :  <Image width={600} src={src} alt="document img" />}
                  {/*<iframe className="w-full h-[80vh]" src={src} ></iframe>*/}


              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
