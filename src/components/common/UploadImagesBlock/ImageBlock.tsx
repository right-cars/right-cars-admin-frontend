"use client";

import { useEffect, useState } from "react";
// import SaveOrCancel from "../Buttons/SaveOrCancel";
import UploadBtn from "./UploadBtn";
import Gallery from "./Gallery";


// @ts-expect-error
export default function ImageBlock({ errors, setValue, initialImages }: { initialImages?: (File | string | null)[] }) {
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
    const file = e.target.files ? e.target.files[0]: null;
    const updatedImages = [...images];
    updatedImages[index] = file;
    setImages(updatedImages);
    setValue("images", updatedImages);
  };

  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  // const handleSave = () => {
  //   const uploadedFiles = images.filter((image) => image !== null) as File[];
  //   if (uploadedFiles.length > 0) {
  //     const formData = new FormData();
  //     uploadedFiles.forEach((file, index) => {
  //       formData.append(`image_${index + 1}`, file);
  //     });
  //     console.log("Файли для збереження:", uploadedFiles);
  //   }
  // };

  return (
    <div>
      <h2 className="text-md font-bold mb-14 text-black uppercase">Pictures</h2>

      <UploadBtn images={images} handleFileChange={handleFileChange}/>

      {/* Галерея */}
      <Gallery images={images} handleFileChange={handleFileChange} removeImage={removeImage}/>
      {errors.images && <p style={{color: "red"}}>{errors.images.message}</p>}
      {/*{images.some((image) => image !== null) && (*/}
      {/*  <SaveOrCancel variant="save" onSave={handleSave} />*/}
      {/*)}*/}
    </div>
  );
}
