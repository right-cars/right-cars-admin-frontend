"use client"
import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import AddVehicleFormBlock from "@/components/views/AddVehicleFormBlock/AddVehicleFormBlock";
import { BlockData } from "@/types/types";
import { temporary } from "../temporary";

export default function EditVehicle() {

    const handleSave = (data:BlockData[]) => {
    console.log("Updated Data:", data);
    };
  
  return (
   <Container>
      <Toolbar title="Volkswagen Polo Hatch" variant="edit" />
         <AddVehicleFormBlock initialData={temporary} onSave={handleSave} />
    </Container>
  );
}
