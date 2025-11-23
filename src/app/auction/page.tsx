import Container from "@/components/common/Container";
// import Toolbar from "@/components/modules/ToolBar/Toolbar";
import AuctionToolbar from "@/components/modules/ToolBar/AuctionToolbar";
// import StatusTabs from "@/components/views/Home/StatusTabs";
import AuctionStatusTabs from "@/components/views/Home/AuctionStatusTabs";

import {getAuctions} from "@/api/auctions";

export default async function Action() {
    const auctions = await getAuctions();

  return (
      <Container>
          <AuctionToolbar title="auction" />
          <AuctionStatusTabs auctions={auctions}/>
      </Container>
  )
}
