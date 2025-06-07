
import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import UsersTabs from "@/components/views/Users/UsersTabs";

import {UsersProvider} from "@/providers/UsersContext";

export default function Users() {
  return (

          <Container>
              <UsersProvider>
                  <Toolbar type="users" title="users" variant="manage" />
                  <UsersTabs />
              </UsersProvider>
          </Container>

  );
}
