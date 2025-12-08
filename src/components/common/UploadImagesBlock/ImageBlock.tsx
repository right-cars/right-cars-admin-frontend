"use client";

import { useEffect, useState } from "react";
// import SaveOrCancel from "../Buttons/SaveOrCancel";
import UploadBtn from "./UploadBtn";
import Gallery from "./Gallery";


// @ts-expect-error
export default function ImageBlock({ clearError, errors, setValue, initialImages }: { initialImages?: (File | string | null)[] }) {
  const [images, setImages] = useState<(File | string | null)[]>(Array(20).fill(null));

  useEffect(() => {
    if (initialImages) {
      setImages(initialImages);
    }
  }, [initialImages]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if(e.target.files?.length) {
      clearError();
      const files = Array.from(e.target.files);
      const updatedImages = [...images];
      for(const file of files) {
        updatedImages[index] = file;
        index += 1;
      }
      setImages(updatedImages);
      setValue("images", updatedImages);
    }
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
