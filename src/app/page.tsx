"use client";
import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import Tabs from "@/components/views/Home/Tabs"

export default function Home() {
  return (
    <Container>
      <Toolbar title="vehicles" />
      <Tabs/>
    </Container>
  );
}
