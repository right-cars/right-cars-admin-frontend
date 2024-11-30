import { nanoid } from "nanoid";

export const initialData = [
        {
      title: "Overview",
      inputs: [
        { id: nanoid(), label: "make", value: "" },
        { id: nanoid(), label: "km", value: "" },
        { id: nanoid(), label: "model", value: "" },
        { id: nanoid(), label: "fuel", value: "" },
        { id: nanoid(), label: "year", value: "" },
        { id: nanoid(), label: "Transmission", value: "" },
        { id: nanoid(), label: "price", value: "" },
        { id: nanoid(), label: "Drive Type", value: "" },
        { id: nanoid(), label: "Finance", value: "" },
      ],
    },
    {
      title: "Details",
      inputs: [
        { id: nanoid(), label: "Fuel Consumption", value: "" },
        { id: nanoid(), label: "Body Type", value: "" },
        { id: nanoid(), label: "Engine Capacity", value: "" },
        { id: nanoid(), label: "Variant", value: "" },
        { id: nanoid(), label: "Number of Seats", value: "" },
        { id: nanoid(), label: "Colour", value: "" },
        { id: nanoid(), label: "Number of Doors", value: "" },
        { id: nanoid(), label: "stock number", value: "" },
      ],
    },
]