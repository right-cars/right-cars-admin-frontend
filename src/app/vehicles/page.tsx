"use client";

import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import StatusTabs from "@/components/views/Home/StatusTabs";

import ProtectedRoute from "@/components/routes/ProtectedRoute/ProtectedRoute";

import {CarsProvider} from "@/providers/CarsContext";

export default function VehiclesPage() {
    return (
        <ProtectedRoute>
            <Container>
                <CarsProvider>
                    <Toolbar title="vehicles" />
                    <StatusTabs/>
                </CarsProvider>
            </Container>
        </ProtectedRoute>
    );
}


