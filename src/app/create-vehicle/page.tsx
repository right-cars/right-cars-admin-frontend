"use client"

import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import AddVehicleFormBlock from "@/components/views/AddVehicleFormBlock/AddVehicleFormBlock";
import { initialData } from "./initialData";
import { BlockData } from "@/types/types";

export default function CreateVehicle() {
    const handleSave = (data:BlockData[]) => {
    console.log("Saved Data:", data);
    };
  
  return (
   <Container>
      <Toolbar title="new vehicle" variant="add" />
      <AddVehicleFormBlock initialData={initialData} onSave={handleSave} />
    </Container>
  );
}
