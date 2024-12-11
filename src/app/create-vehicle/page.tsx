"use client";

import ProtectedRoute from "@/components/routes/ProtectedRoute/ProtectedRoute";

import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import VehicleFormBlock from "@/components/modules/VehicleFormBlock/VehicleFormBlock";

import { initialData } from "./initialData";

export default function CreateVehicle() {
  return (
      <ProtectedRoute>
          <Container>
              <Toolbar title="new vehicle" variant="add" />
              <VehicleFormBlock variant="add" initialData={initialData} />
          </Container>
      </ProtectedRoute>
  );
}
