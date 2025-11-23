import Image from "next/image";
import RemoveBtn from "./RemoveBtn";

interface GalleryProps {
  images: (File | string | null)[];
  handleFileChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  removeImage: (index: number) => void;
}

export default function Gallery({
  images,
  handleFileChange,
  removeImage,
}: GalleryProps) {
  return (
    <div className="grid grid-cols-6 gap-4">
      {images.map((image, index) => {
        const isImageString = typeof image === "string";

        return (
          <div
            key={index}
            className="flex justify-center items-center w-[176px] h-[176px] bg-gray-200"
          >
            {/* Якщо зображення є */}
            {image ? (
              // це для сторінки edit, бо в тимчасовій даті в мене там зображення рядок
              isImageString ? (
                <div className="relative w-[176px] h-[176px] flex justify-center items-center">
                  <Image
                    src={image}
                    alt={`uploaded-img-${index}`}
                    width={176}
                    height={176}
                    className="object-cover w-auto h-full"
                  />
                  <RemoveBtn index={index} removeImage={removeImage} />
                </div>
              ) : (
                //  це для ст створення
                <div className="relative w-[176px] h-[176px] flex justify-center items-center">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={`uploaded-img-${index}`}
                    width={176}
                    height={176}
                    className="object-cover w-auto h-full"
                  />
                  <RemoveBtn index={index} removeImage={removeImage} />
                </div>
              )
            ) : (
              // Якщо зображення немає
              <label
                htmlFor={`file-input-${index}`}
                className="flex flex-col items-center cursor-pointer"
              >
                <Image
                  src="/icons/car-placeholder.svg"
                  alt="placeholder"
                  width={176}
                  height={176}
                  className="object-cover"
                />
                <input
                  id={`file-input-${index}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  multiple
                  onChange={(e) => handleFileChange(e, index)}
                />
              </label>
            )}
          </div>
        );
      })}
    </div>
  );
}
