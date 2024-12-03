import { Button } from "@nextui-org/react"
import Image from "next/image"

interface Props {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  images: (File | string | null)[];
}

export default function UploadBtn({ handleFileChange, images }: Props) {
     const availableIndex = images.indexOf(null);
    return (
          <div className="mb-8">
        <Button
          radius="full"
          color="primary"
          variant="flat"
          className="flex items-center gap-[8px]"
        >
          <label
            htmlFor="upload-images"
            className="cursor-pointer flex items-center gap-[8px]"
          >
            <p>Download pictures</p>
            <Image
              src="/icons/upload.svg"
              alt="upload icon"
              width={24}
              height={24}
            />
          </label>
        </Button>
        <input
          id="upload-images"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
          if (availableIndex !== -1) {
            handleFileChange(e, availableIndex);
          }
        }}
        />
        </div>
    )
}