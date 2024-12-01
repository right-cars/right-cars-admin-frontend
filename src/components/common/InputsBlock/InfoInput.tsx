import { InputProps } from "@/types/types";
import { Image, Input } from "@nextui-org/react";

export default function InfoInput({
  label,
  value,
  onChange,
  readOnly = false,
}: InputProps) {
  return (
    <Input
      isReadOnly={readOnly ? true : false}
      variant="underlined"
      label={label}
      placeholder="Type here"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      endContent={
        !readOnly && (
          <Image
            src="/icons/edit.svg"
            alt="edit icon"
            width={24}
            height={24}
            className="flex-shrink-0 cursor-pointer"
          />
        )
      }
    />
  );
}
