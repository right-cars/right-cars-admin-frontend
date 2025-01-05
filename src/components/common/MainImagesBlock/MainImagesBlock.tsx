"use client";

import { useEffect, useState } from "react";
// import SaveOrCancel from "../Buttons/SaveOrCancel";
import UploadBtn from "./UploadBtn";
import Gallery from "./Gallery";

// @ts-expect-error
export default function MainImagesBlock({ errors, setValue, initialMainImage }: { initialMainImage?: (File | string | null) }) {
  const [image, setImage] = useState<(File | string | null)>(null);

  useEffect(() => {
    if (initialMainImage) {
      setImage(initialMainImage);
    }
  }, [initialMainImage]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files ? e.target.files[0]: null;
    setImage(file);
    setValue("mainImage", file);
  };

  const removeImage = () => {
    setImage(null);
    setValue("mainImage", image);
  };

  return (
    <div>
      <h2 className="text-md font-bold mb-14 text-black uppercase">Main picture</h2>
      <div>
        <UploadBtn handleFileChange={handleFileChange}/>

        {/* Галерея */}
        <Gallery image={image} handleFileChange={handleFileChange} removeImage={removeImage}/>
        {errors.mainImage && <p style={{color: "red"}}>{errors.mainImage.message}</p>}
        {/*{images.some((image) => image !== null) && (*/}
        {/*  <SaveOrCancel variant="save" onSave={handleSave} />*/}
        {/*)}*/}
      </div>

    </div>
  );
}
