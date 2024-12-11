import ProtectedRoute from "@/components/routes/ProtectedRoute/ProtectedRoute";
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
  // const handleSave = (data: { blocks: BlockData[]; files: (File | null)[],video: string | null  }) => {
  //   console.log("Saved Data:", data);
  // };

    const {id} = params;

    const data = await getCarById(id);

    for(const {inputs} of temporary) {
        inputs.forEach(item => {
            if(data[item.name]) {
                item.value = data[item.name];
            }
        })
    }
    console.log(data)

  return (
      <ProtectedRoute>
          <Container>
              <Toolbar title={data.make} variant="edit" />
              <VehicleFormBlock variant="edit" initialImages={data.images} initialData={temporary} initialVideoUrl={data.video}  />
          </Container>
      </ProtectedRoute>
  );
}
