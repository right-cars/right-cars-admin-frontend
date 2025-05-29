"use client";

import {useCallback} from "react";
import {Button, useDisclosure} from "@nextui-org/react";
import {useRouter} from "next/navigation";

import SuccessModal from "../modals/SuccessModal";

interface BtnProps {
  variant: "save" | "publish";
  onSave: () => void;
  isOpen: boolean;
  title: string;
  id: string | undefined;
}

export default function SaveOrCancel({ title, id, variant, onSave, isOpen }: BtnProps) {
    const { onOpenChange } = useDisclosure();
    const router = useRouter();
    const goBack = useCallback(()=> router.back(), []);

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
        onPress={goBack}
      >
        Cancel
      </Button>
      {variant === "publish" && (
        <SuccessModal
          title={title}
          isOpen={isOpen}
          id={id}
          onOpenChange={onOpenChange}
        />
      )}
    </div>
  );
}
