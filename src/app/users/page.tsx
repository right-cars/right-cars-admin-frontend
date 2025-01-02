
import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import UsersTabs from "@/components/views/Users/UsersTabs";

export default function Users() {
  return (

          <Container>
              <Toolbar type="users" title="users" variant="manage" />
              <UsersTabs />
          </Container>

  );
}
