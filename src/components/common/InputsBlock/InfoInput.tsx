import { InputProps } from "@/types/types";
import { Image, Input } from "@nextui-org/react";

export default function InfoInput({
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <Input
      variant="underlined"
      label={label}
      placeholder="Type here"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      endContent={
        <Image
          src="/icons/edit.svg"
          alt="edit icon"
          width={24}
          height={24}
          className="flex-shrink-0 cursor-pointer"
        />
      }
    />
  );
}
