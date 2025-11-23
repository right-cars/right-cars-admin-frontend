import Image from "next/image";
import RemoveBtn from "./RemoveBtn";

interface GalleryProps {
  image: (File | string | null);
  handleFileChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  removeImage: () => void;
}

export default function Gallery({
  image,
  handleFileChange,
  removeImage,
}: GalleryProps) {

  if(image === null) {
    return (
        <label
            htmlFor="file-input-main-image"
            className="cursor-pointer"
        >
          <Image
              src="/icons/car-placeholder.svg"
              alt="placeholder"
              width={176}
              height={176}
              className="object-cover"
          />
          <input
              id="file-input-main-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
          />
        </label>
    )
  }

  if (typeof image === "string") {
    return (
        <div className="relative w-[176px] h-[176px] ">
          <Image
              src={image}
              alt="file-input-main-image"
              width={176}
              height={176}
              className="object-cover w-auto h-full"
          />
          <RemoveBtn removeImage={removeImage}/>
        </div>
    )
  }

  return (
      <div className="relative w-[176px] h-[176px] ">
        <Image
            src={URL.createObjectURL(image)}
            alt="file-input-main-image"
            width={176}
            height={176}
            className="object-cover w-auto h-full"
        />
        <RemoveBtn removeImage={removeImage}/>
      </div>
  );
}
