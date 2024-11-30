import { Button } from "@nextui-org/react";
interface BtnProps {
    variant: "save" | "publish";
    onSave:()=>void
}

export default function SaveOrCancel({ variant, onSave }: BtnProps) {
  return (
    <div className="flex gap-[8px] mt-10 justify-end">
      <Button onClick={onSave} color="primary" radius="full">
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
    </div>
  );
}
