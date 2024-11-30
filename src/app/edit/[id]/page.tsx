"use client"
import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import VehicleFormBlock from "@/components/modules/VehicleFormBlock/VehicleFormBlock";
import { BlockData } from "@/types/types";
import { temporary } from "../temporary";
import { tepmoraryImgs } from "../temporaryImgs";

export default function EditVehicle() {
  const handleSave = (data: { blocks: BlockData[]; files: (File | null)[] }) => {
    console.log("Saved Data:", data);
  };
  
  return (
   <Container>
      <Toolbar title="Volkswagen Polo Hatch" variant="edit" />
         <VehicleFormBlock variant="edit"   initialImages={tepmoraryImgs} initialData={temporary} onSave={handleSave} />
    </Container>
  );
}
