import {Button, useDisclosure} from "@nextui-org/react";

import SuccessModal from "../modals/SuccessModal";

interface BtnProps {
  variant: "save" | "publish";
  onSave: () => void;
  isOpen: boolean;
  title: string;
}

export default function SaveOrCancel({ title, variant, onSave, isOpen }: BtnProps) {
    const { onOpenChange } = useDisclosure();

  return (
    <div className="flex gap-[8px] mt-10 justify-end">
      <Button
        onPress={onSave}
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
          title={title}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      )}
    </div>
  );
}
