import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import UserInfoBlock from "@/components/views/EditUser/UserInfoBlock";

export default function UserEdit() {
  return (
    <Container>
      <Toolbar type="users" title="Humeniuk Alina" variant="edit" />
      <UserInfoBlock/>
    </Container>
  );
}
