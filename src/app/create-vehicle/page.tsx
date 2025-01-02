"use client";


import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import VehicleFormBlock from "@/components/modules/VehicleFormBlock/VehicleFormBlock";

import { initialData } from "./initialData";

export default function CreateVehicle() {
  return (

          <Container>
              <Toolbar title="new vehicle" variant="add" />
              {/*@ts-expect-error*/}
              <VehicleFormBlock variant="add" initialData={initialData} />
          </Container>

  );
}
