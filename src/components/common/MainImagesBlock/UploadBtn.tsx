import { Button } from "@nextui-org/react"
import Image from "next/image"

interface Props {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadBtn({ handleFileChange }: Props) {

    return (
          <div className="mb-8">
        <Button
          radius="full"
          color="primary"
          variant="flat"
          className="flex items-center gap-[8px]"
        >
          <label
            htmlFor="upload-main-image"
            className="cursor-pointer flex items-center gap-[8px]"
          >
            <p>Upload main picture</p>
            <Image
              src="/icons/upload.svg"
              alt="upload icon"
              width={24}
              height={24}
            />
          </label>
        </Button>
        <input
          id="upload-main-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        </div>
    )
}
