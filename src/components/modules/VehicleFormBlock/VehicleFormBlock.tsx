import InputsBlock from "@/components/common/InputsBlock/InputsBlock";
import { VehicleFormBlockProps, BlockData } from "@/types/types";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import VinCode from "./VinCode";

export default function VehicleFormBlock({
  variant,
  initialData,
  onSave,
}: VehicleFormBlockProps) {
  const [blocks, setBlocks] = useState<BlockData[]>(initialData);

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

  //  const handleSave = () => {
  //     const formData: VehicleFormData = { vinCode, blocks };
  //    onSave(formData);

  //   };

  const handleSave = () => {
    onSave(blocks);
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
        />
      ))}
      </div>
     
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
}
