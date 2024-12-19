"use client"

import ProtectedRoute from "@/components/routes/ProtectedRoute/ProtectedRoute";

import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import DocumentBlock from "@/components/views/EditUser/Documents";
import FinApp from "@/components/views/EditUser/FinApp";
import Security from "@/components/views/EditUser/Security";
import UserInfoBlock from "@/components/views/EditUser/UserInfoBlock";

import {useAuth} from "@/providers/AuthContext";

export default function UserEdit() {
    const {role} = useAuth();

  return (
      <ProtectedRoute>
          <Container>
              <Toolbar type="users" title="Humeniuk Alina" variant="edit" />
              <UserInfoBlock />
              <DocumentBlock />
              <FinApp />
              {role === "superadmin" ? <Security/> : <div />}
          </Container>
      </ProtectedRoute>
  );
}
