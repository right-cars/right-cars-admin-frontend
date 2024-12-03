"use client"

import { BlockData } from "@/types/types";
import { initialData } from "./initialData";
import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import VehicleFormBlock from "@/components/modules/VehicleFormBlock/VehicleFormBlock";

export default function CreateVehicle() {
  const handleSave = (data: { blocks: BlockData[]; files: (File | null)[],video: string | null  }) => {
    console.log("Saved Data:", data);
  };
  
  return (
   <Container>
      <Toolbar title="new vehicle" variant="add" />
      <VehicleFormBlock variant="add" initialData={initialData} onSave={handleSave} />
    </Container>
  );
}
