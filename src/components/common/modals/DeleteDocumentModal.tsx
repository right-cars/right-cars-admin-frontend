import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";

interface ModalProps {
    user: string;
    documentName: string;
    actionName: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onPress: () => void;
}

export default function DeleteDocumentModal({ isOpen, onOpenChange, user, actionName, documentName, onPress }: ModalProps) {
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
        {(onClose) => (
          <>
            <ModalBody>
              <div className="flex flex-col items-center p-4 rounded border border-lightGray shadow-custom bg-pureWhite">
                <p className="text-[#F31260] font-metrophobic text-center">
                  This action will {actionName} {user} {documentName}
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button radius="full" color="primary" onPress={() => {
                  onClose();
                  onPress();
              }}>
                Confirm {actionName}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
