
import Container from "@/components/common/Container";
import Toolbar from "@/components/modules/ToolBar/Toolbar";
import VehicleFormBlock from "@/components/modules/VehicleFormBlock/VehicleFormBlock";

// import { BlockData } from "@/types/types";
import { temporary } from "./temporary";
// import { tepmoraryImgs } from "./temporaryImgs";

// const temporaryVideoUrl = "https://youtu.be/D9G1VOjN_84?si=GIZHe07Ugzx-u9AM";

import {getCarById} from "@/api/cars";

// @ts-expect-error
export default async function EditVehicle({params}) {
    const {id} = params;

    const data = await getCarById(id);

    for(const { inputs} of temporary) {
        inputs.forEach(item => {
            if(data[item.name]) {
                item.value = data[item.name];
            }
        })
    }

  return (
          <Container>
              <Toolbar title={data.make} variant="edit" />
              <VehicleFormBlock id={id} variant="edit" initialImages={data.images} initialData={temporary} initialVideoUrl={data.video}  />
          </Container>
  );
}
