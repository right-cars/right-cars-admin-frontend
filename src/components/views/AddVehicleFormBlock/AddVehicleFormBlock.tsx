import InputsBlock from "@/components/common/InputsBlock/InputsBlock";
import { AddVehicleFormBlockProps, BlockData } from "@/types/types";
import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function AddVehicleFormBlock({
  initialData,
  onSave,
}: AddVehicleFormBlockProps) {
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

  const handleSave = () => {
    onSave(blocks);
  };

  return (
    <div>
      {blocks.map((block) => (
        <InputsBlock
          key={block.title}
          title={block.title}
          inputs={block.inputs}
          onInputChange={handleInputChange}
        />
      ))}
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
}
