import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import StatusTabs from "@/components/views/Home/StatusTabs";


export default function Home() {
  return (
    <Container>
      <Toolbar title="vehicles" />
      <StatusTabs/>
    </Container>
  );
}
