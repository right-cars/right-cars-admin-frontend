import { Image, Input } from "@nextui-org/react";

interface FileUploadInputProps {
  label: string;
  onFileChange: (file: File | null) => void;
}

export default function FileUploadInput({
  label,
  onFileChange,
}: FileUploadInputProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    onFileChange(file);
  };

  return (
    <div className="relative">
      <Input
        type="file"
        variant="underlined"
        label={label}
        onChange={handleFileChange}
        endContent={
          <Image
            src="/icons/upload.svg"
            alt="upload icon"
            width={24}
            height={24}
            className="flex-shrink-0 cursor-pointer"
          />
        }
      />
    </div>
  );
}
