"use client"
import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import DocumentBlock from "@/components/views/EditUser/Documents";
import FinApp from "@/components/views/EditUser/FinApp";
import Security from "@/components/views/EditUser/Security";
import UserInfoBlock from "@/components/views/EditUser/UserInfoBlock";

export default function UserEdit() {
  return (
    <Container>
      <Toolbar type="users" title="Humeniuk Alina" variant="edit" />
      <UserInfoBlock />
      <DocumentBlock />
      <FinApp />
      <Security/>
    </Container>
  );
}
