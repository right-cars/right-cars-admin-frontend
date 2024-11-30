import InputsBlock from "@/components/common/InputsBlock/InputsBlock";
import { VehicleFormBlockProps, BlockData } from "@/types/types";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import VinCode from "./VinCode";
import ImageBlock from "@/components/common/UploadImagesBlock/ImageBlock";
import VideoBlock from "@/components/common/VideoBlock/VideoBlock";

export default function VehicleFormBlock({
  variant,
  initialData,
  onSave,
  initialImages
}: VehicleFormBlockProps) {
  const [blocks, setBlocks] = useState<BlockData[]>(initialData);
  const [files, setFiles] = useState<(File | null)[]>([]);

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
    };
    onSave(dataToSave);

    setBlocks(initialData);
    setFiles([]);
  };

  return (
    <div>
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
      <ImageBlock initialImages={initialImages}/>
      <VideoBlock />
      </div>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
}
