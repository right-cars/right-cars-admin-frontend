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
      { id: nanoid(), label: "transmission", value: "" },
      { id: nanoid(), label: "price", value: "" },
      { id: nanoid(), label: "drive type", value: "" },
      { id: nanoid(), label: "finance", value: "" },
    ],
  },
  {
    title: "Details",
    inputs: [
      { id: nanoid(), label: "fuel consumption", value: "" },
      { id: nanoid(), label: "body type", value: "" },
      { id: nanoid(), label: "engine capacity", value: "" },
      { id: nanoid(), label: "variant", value: "" },
      { id: nanoid(), label: "number of seats", value: "" },
      { id: nanoid(), label: "colour", value: "" },
      { id: nanoid(), label: "number of doors", value: "" },
      { id: nanoid(), label: "stock number", value: "" },
    ],
  },
  {
    title: "conditions",
    inputs: [
      { id: nanoid(), label: "vehicle service History", value: "" },
      {
        id: nanoid(),
        label: "roadworthy voucher",
        value: "",
        isFileInput: true,
      },
      { id: nanoid(), label: "spare key", value: "" },
      { id: nanoid(), label: "condition report", value: "", isFileInput: true },
      { id: nanoid(), label: "Warranty", value: "" },
    ],
  },
  {
    title: "perfomance",
    inputs: [
      { id: nanoid(), label: "fuel Consumption", value: "" },
      { id: nanoid(), label: "kilowatts", value: "" },
      { id: nanoid(), label: "cylinder layout", value: "" },
      { id: nanoid(), label: "gears", value: "" },
    ],
  },
  {
    title: "Featurers",
    inputs: [
      { id: nanoid(), label: "feature 1", value: "" },
      { id: nanoid(), label: "feature 4", value: "" },
      { id: nanoid(), label: "feature 2", value: "" },
      { id: nanoid(), label: "feature 5", value: "" },
      { id: nanoid(), label: "feature 3", value: "" },
      { id: nanoid(), label: "feature 6", value: "" },
    ],
  },
];
