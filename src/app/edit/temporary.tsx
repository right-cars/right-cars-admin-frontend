import { nanoid } from "nanoid";

export const temporary = [
  {
    title: "Overview",
    inputs: [
      { id: nanoid(), label: "make", value: "Toyota" },
      { id: nanoid(), label: "km", value: "50000" },
      { id: nanoid(), label: "model", value: "Corolla" },
      { id: nanoid(), label: "fuel", value: "Petrol" },
      { id: nanoid(), label: "year", value: "2020" },
      { id: nanoid(), label: "Transmission", value: "Automatic" },
      { id: nanoid(), label: "price", value: "20000" },
      { id: nanoid(), label: "Drive Type", value: "Front-Wheel Drive" },
      { id: nanoid(), label: "Finance", value: "Available" },
    ],
  },
  {
    title: "Details",
    inputs: [
      { id: nanoid(), label: "Fuel Consumption", value: "6.5 L/100km" },
      { id: nanoid(), label: "Body Type", value: "Sedan" },
      { id: nanoid(), label: "Engine Capacity", value: "1800cc" },
      { id: nanoid(), label: "Variant", value: "Sport" },
      { id: nanoid(), label: "Number of Seats", value: "5" },
      { id: nanoid(), label: "Colour", value: "Silver" },
      { id: nanoid(), label: "Number of Doors", value: "4" },
      { id: nanoid(), label: "stock number", value: "A12345" },
    ],
  },
];
