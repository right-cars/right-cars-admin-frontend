import { Image, Input } from "@nextui-org/react";
import {Control, Controller} from "react-hook-form";

interface FileUploadInputProps {
  label: string;
  name: string;
  // onFileChange: (file: File | null) => void;
  control: Control;
  errors?: object | undefined;
}

export default function FileUploadInput({
  label,
  // onFileChange,
    name,
    control,
    errors,
}: FileUploadInputProps) {
  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files ? e.target.files[0] : null;
  //   onFileChange(file);
  // };

  return (
    <div className="relative">
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => <Input
                type="file"
                variant="underlined"
                label={label}
                // onChange={handleFileChange}
                onChange={e => {
                    // @ts-expect-error
                    field.onChange(e.target.files[0]);
                }}
                // @ts-expect-error
                errorMessage={errors[name] ? errors[name]?.message : ""}
                // @ts-expect-error
                isInvalid={Boolean(errors[name])}
                endContent={
                    <Image
                        src="/icons/upload.svg"
                        alt="upload icon"
                        width={24}
                        height={24}
                        className="flex-shrink-0 cursor-pointer"
                    />
                }
            />}
        />
    </div>
  );
}
