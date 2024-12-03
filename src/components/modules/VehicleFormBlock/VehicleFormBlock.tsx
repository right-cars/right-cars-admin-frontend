import { useState } from "react";
import { VehicleFormBlockProps, BlockData } from "@/types/types";
import InputsBlock from "@/components/common/InputsBlock/InputsBlock";
import ImageBlock from "@/components/common/UploadImagesBlock/ImageBlock";
import VideoBlock from "@/components/common/VideoBlock/VideoBlock";
import SaveOrCancel from "@/components/common/Buttons/SaveOrCancel";
import VinCode from "./VinCode";

export default function VehicleFormBlock({
  variant,
  initialData,
  onSave,
  initialImages,
   initialVideoUrl
}: VehicleFormBlockProps) {
  const [blocks, setBlocks] = useState<BlockData[]>(initialData);
  const [files, setFiles] = useState<(File | null)[]>([]);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleInputChange = (
    blockTitle: string,
    inputId: string,
    newValue: string
  ) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.title === blockTitle
          ? {
              ...block,
              inputs: block.inputs.map((input) =>
                input.id === inputId ? { ...input, value: newValue } : input
              ),
            }
          : block
      )
    );
  };

  const handleFileChange = (inputId: string, file: File | null) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      const fileIndex = updatedFiles.findIndex((file) => file === null);
      if (fileIndex >= 0) {
        updatedFiles[fileIndex] = file;
      } else {
        updatedFiles.push(file);
      }
      return updatedFiles;
    });
  };

  const handleSave = () => {
    const dataToSave = {
      blocks,
      files,
      video: videoUrl,
    };
    onSave(dataToSave);

    setBlocks(initialData);
    setFiles([]);
    setVideoUrl(null);
  };

   const handleVideoUrlChange = (url: string | null) => {
    setVideoUrl(url); 
  };

  return (
    <div className="pb-[120px]">
      {variant === "add" && <VinCode />}
      <div className="flex flex-col gap-20">
        {blocks.map((block) => (
          <InputsBlock
            key={block.title}
            title={block.title}
            inputs={block.inputs}
            onInputChange={handleInputChange}
            onFileChange={handleFileChange}
          />
        ))}
        <ImageBlock initialImages={initialImages} />
       <VideoBlock onSaveVideoUrl={handleVideoUrlChange} initialVideoUrl={initialVideoUrl} />
      </div>
      <SaveOrCancel variant="publish" onSave={handleSave} />
    </div>
  );
}
