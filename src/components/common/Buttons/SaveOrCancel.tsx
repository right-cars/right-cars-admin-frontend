import { Button, useDisclosure } from "@nextui-org/react";
import SuccessModal from "../modals/SuccessModal";
interface BtnProps {
  variant: "save" | "publish";
  onSave: () => void;
}

export default function SaveOrCancel({ variant, onSave }: BtnProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex gap-[8px] mt-10 justify-end">
      <Button
        onClick={() => {
          onSave();
          onOpen();
        }}
        color="primary"
        radius="full"
      >
        {variant === "save" ? "Save" : "Save and publish"}
      </Button>
      <Button
        color="primary"
        variant="bordered"
        radius="full"
        className="bordered-button"
      >
        Cancel
      </Button>
      {variant === "publish" && (
        <SuccessModal
          title={"Volkswagen polo hatch"}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      )}
    </div>
  );
}
