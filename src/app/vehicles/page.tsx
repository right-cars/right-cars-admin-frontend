"use client";

import {useState} from "react";

import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import StatusTabs from "@/components/views/Home/StatusTabs";

import ProtectedRoute from "@/components/routes/ProtectedRoute/ProtectedRoute";

export default function VehiclesPage() {
    const [filters, setFilters] = useState({
        type: "all",
        search: "",
    });

    return (
        <ProtectedRoute>
            <Container>
                {/*@ts-expect-error*/}
                <Toolbar setFilters={setFilters} title="vehicles" />
                <StatusTabs filters={filters}/>
            </Container>
        </ProtectedRoute>
    );
}
