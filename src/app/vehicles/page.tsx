"use client";

import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import StatusTabs from "@/components/views/Home/StatusTabs";

import {CarsProvider} from "@/providers/CarsContext";

export default function VehiclesPage() {
    return (
            <Container>
                <CarsProvider>
                    <Toolbar title="vehicles" />
                    <StatusTabs/>
                </CarsProvider>
            </Container>
    );
}


