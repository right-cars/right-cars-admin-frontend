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
      { id: nanoid(), label: "transmission", value: "Automatic" },
      { id: nanoid(), label: "price", value: "20000" },
      { id: nanoid(), label: "drive type", value: "Front-Wheel Drive" },
      { id: nanoid(), label: "finance", value: "Available" },
    ],
  },
  {
    title: "Details",
    inputs: [
      { id: nanoid(), label: "fuel consumption", value: "6.5 L/100km" },
      { id: nanoid(), label: "body type", value: "Sedan" },
      { id: nanoid(), label: "engine capacity", value: "1800cc" },
      { id: nanoid(), label: "variant", value: "Sport" },
      { id: nanoid(), label: "number of seats", value: "5" },
      { id: nanoid(), label: "colour", value: "Silver" },
      { id: nanoid(), label: "number of doors", value: "4" },
      { id: nanoid(), label: "stock number", value: "A12345" },
    ],
  },
  {
    title: "conditions",
    inputs: [
      { id: nanoid(), label: "vehicle service history", value: "Full" },
      { id: nanoid(), label: "roadworthy voucher", value: "", isFileInput: true },
      { id: nanoid(), label: "spare key", value: "Yes" },
      { id: nanoid(), label: "condition report", value: "", isFileInput: true },
      { id: nanoid(), label: "warranty", value: "3 years" },
    ],
  },
  {
    title: "performance",
    inputs: [
      { id: nanoid(), label: "fuel consumption", value: "6.5 L/100km" },
      { id: nanoid(), label: "kilowatts", value: "130 kW" },
      { id: nanoid(), label: "cylinder layout", value: "Inline-4" },
      { id: nanoid(), label: "gears", value: "7" },
    ],
  },
  {
    title: "features",
    inputs: [
      { id: nanoid(), label: "feature 1", value: "Bluetooth" },
      { id: nanoid(), label: "feature 2", value: "Leather Seats" },
      { id: nanoid(), label: "feature 3", value: "Sunroof" },
      { id: nanoid(), label: "feature 4", value: "Rear Camera" },
      { id: nanoid(), label: "feature 5", value: "Cruise Control" },
      { id: nanoid(), label: "feature 6", value: "Parking Sensors" },
    ],
  },
];
