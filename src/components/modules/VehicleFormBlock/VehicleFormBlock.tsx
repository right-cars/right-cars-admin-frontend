"use client";

import { useState } from "react";
import {useForm} from "react-hook-form";
import {useDisclosure} from "@nextui-org/react";
import { yupResolver } from '@hookform/resolvers/yup';

import { VehicleFormBlockProps, BlockData } from "@/types/types";

import InputsBlock from "@/components/common/InputsBlock/InputsBlock";
import ImageBlock from "@/components/common/UploadImagesBlock/ImageBlock";
import VideoBlock from "@/components/common/VideoBlock/VideoBlock";
import SaveOrCancel from "@/components/common/Buttons/SaveOrCancel";

import schema from "./validation";

    import {addCar} from "@/api/cars";

// import VinCode from "./VinCode";

export default function VehicleFormBlock({
  // variant,
  initialData,
  initialImages,
   initialVideoUrl
}: VehicleFormBlockProps) {
    const { isOpen, onOpen } = useDisclosure();
    const defaultValues = initialData.map(({inputs}) => inputs).flat().map(item => ({[item.name]: item.value}));

    const {
        handleSubmit,
        control,
        setValue,
        setError,
        reset,
        formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });

  const [blocks] = useState<BlockData[]>(initialData);
  // const [files, setFiles] = useState<(File | null)[]>([]);
  const [ ,setVideoUrl] = useState<string | null>(null);

  // const handleInputChange = (
  //   blockTitle: string,
  //   inputId: string,
  //   newValue: string
  // ) => {
  //   setBlocks((prevBlocks) =>
  //     prevBlocks.map((block) =>
  //       block.title === blockTitle
  //         ? {
  //             ...block,
  //             inputs: block.inputs.map((input) =>
  //               input.id === inputId ? { ...input, value: newValue } : input
  //             ),
  //           }
  //         : block
  //     )
  //   );
  // };

  // const handleFileChange = (inputId: string, file: File | null) => {
  //   setFiles((prevFiles) => {
  //     const updatedFiles = [...prevFiles];
  //     const fileIndex = updatedFiles.findIndex((file) => file === null);
  //     if (fileIndex >= 0) {
  //       updatedFiles[fileIndex] = file;
  //     } else {
  //       updatedFiles.push(file);
  //     }
  //     return updatedFiles;
  //   });
  // };

  // const handleSave = () => {
  //   const dataToSave = {
  //     blocks,
  //     files,
  //     video: videoUrl,
  //   };
  //   onSave(dataToSave);
  //
  //   setBlocks(initialData);
  //   setFiles([]);
  //   setVideoUrl(null);
  // };

   const handleVideoUrlChange = (url: string | null) => {
       // @ts-expect-error
       setValue("url", url);
       setVideoUrl(url);
  };

   // @ts-expect-error
    const addVehicle = async data => {
        // @ts-expect-error
        if(!data.images || !data.images.filter(item => Boolean(item)).length) {
            // @ts-expect-error
            return setError("images", {message: "Need upload images"});
        }

        // @ts-expect-error
        data.images = data.images.filter(item => Boolean(item));

        const formData = new FormData();
        // formData.append("images", data.images);
        formData.append("roadworthy_voucher", data.roadworthy_voucher);
        formData.append("condition_report", data.condition_report);
        const textData = {...data};
        // @ts-expect-error
        textData.images.forEach(image => formData.append('images', image));

        delete textData.images;
        delete textData.roadworthy_voucher;
        delete textData.condition_report;

        for(const [key, value] of Object.entries(textData)) {
            // @ts-expect-error
            if(value) formData.append(key, value);
        }

        try {
            await addCar(formData);
            reset();
            onOpen();
        }
        catch(error) {
            console.log(error);
        }
    }

   const onSubmit = handleSubmit(addVehicle);

  return (
    <form className="pb-[120px]">
      {/*{variant === "add" && <VinCode />}*/}
      <div className="flex flex-col gap-20">
        {blocks.map((block) => (
          <InputsBlock
            key={block.title}
            errors={errors}
            title={block.title}
            inputs={block.inputs}
            // onInputChange={handleInputChange}
            // onFileChange={handleFileChange}
            control={control}
          />
        ))}
        <ImageBlock
            //@ts-expect-error
            setValue={setValue}
            errors={errors}
            initialImages={initialImages} />
       <VideoBlock onSaveVideoUrl={handleVideoUrlChange} initialVideoUrl={initialVideoUrl} />
      </div>
      <SaveOrCancel variant="publish" isOpen={isOpen} onSave={onSubmit} />
    </form>
  );
}
