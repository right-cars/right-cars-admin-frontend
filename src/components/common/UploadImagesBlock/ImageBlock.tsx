import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import SaveOrCancel from "../Buttons/SaveOrCancel";

export default function ImageBlock({ initialImages }: { initialImages?: (File | string | null)[] }) {
  const [images, setImages] = useState<(File | string | null)[]>(Array(12).fill(null));

  useEffect(() => {
    if (initialImages) {
      setImages(initialImages);
    }
  }, [initialImages]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    const updatedImages = [...images];
    updatedImages[index] = file;
    setImages(updatedImages);
  };

  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  const handleSave = () => {
    const uploadedFiles = images.filter((image) => image !== null) as File[];
    if (uploadedFiles.length > 0) {
      const formData = new FormData();
      uploadedFiles.forEach((file, index) => {
        formData.append(`image_${index + 1}`, file);
      });
      console.log("Файли для збереження:", uploadedFiles);
    }
  };

  return (
    <div>
      <h2 className="text-md font-bold mb-14 text-black uppercase">Pictures</h2>
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
          onChange={(e) => handleFileChange(e, images.indexOf(null))}
        />
      </div>

      {/* Галерея */}
      <div className="grid grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-[176px] h-[176px] bg-gray-200"
          >
            {image ? (
              typeof image === "string" ? (
                <Image
                  src={image}
                  alt={`uploaded-img-${index}`}
                  width={176}
                  height={176}
                  className="object-cover w-auto h-full"
                />
              ) : (
                <div className="relative w-[176px] h-[176px] flex justify-center items-center">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={`uploaded-img-${index}`}
                    width={176}
                    height={176}
                    className="object-cover w-auto h-full"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1"
                  >
                    <Image
                      src="/icons/close-circle.svg"
                      alt="close icon"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              )
            ) : (
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
                  onChange={(e) => handleFileChange(e, index)}
                />
              </label>
            )}
          </div>
        ))}
      </div>

      {images.some((image) => image !== null) && (
        <SaveOrCancel variant="save" onSave={handleSave} />
      )}
    </div>
  );
}
