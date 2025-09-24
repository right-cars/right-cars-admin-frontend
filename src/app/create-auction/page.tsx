// "use client";

import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
// import VehicleFormBlock from "@/components/modules/VehicleFormBlock/VehicleFormBlock";
import CreateAuctionForm from "@/components/modules/CreactAuctionForm/CreactAuctionForm";

import initialAuctionData from "@/data/initialAuctionData";
import {getCarById} from "@/api/cars";
// import initialCarData from "@/data/initialCarData";
// import { initialData } from "./initialData";

//@ts-expect-error
export default async function CreateVehicle({searchParams}) {
    const {id} = searchParams;
    const data = await getCarById(id);
  return (

          <Container>
              <Toolbar title="adding a car to the auctions" variant="add" />
              {/*@ts-expect-error*/}
              <CreateAuctionForm car={data}  variant="add" initialData={initialAuctionData} />
          </Container>

  );
}
