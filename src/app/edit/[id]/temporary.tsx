import { nanoid } from "nanoid";

export const temporary = [
  {
    title: "Overview",
    inputs: [
      { id: nanoid(), label: "make", name: "make", value: "" },
      { id: nanoid(), label: "km", name:"km", value: "" },
      { id: nanoid(), label: "model", name: "model", value: "" },
      { id: nanoid(), label: "fuel", name: "fuel", value: "" },
      { id: nanoid(), label: "year", name: "year", value: "" },
      { id: nanoid(), label: "transmission", name: "transmission", value: "" },
      { id: nanoid(), label: "price", name: "price", value: "" },
      { id: nanoid(), label: "drive type", name: "drive_type", value: "" },
      { id: nanoid(), label: "finance", name: "finance", value: "" },
      { id: nanoid(), label: "Select car type", name: "type", value: "car", options: [
          { id: nanoid(), value: "car", text: "car" },
          { id: nanoid(), value: "bakkie", text: "bakkie" },
          { id: nanoid(), value: "commercial", text: "commercial" },
        ] },
    ],
  },
  {
    title: "Details",
    inputs: [
      { id: nanoid(), label: "fuel consumption", name: "fuel_consumption", value: "" },
      { id: nanoid(), label: "body type", name: "body_type", value: "" },
      { id: nanoid(), label: "engine capacity", name: "engine_capacity", value: "" },
      { id: nanoid(), label: "variant", name: "variant", value: "" },
      { id: nanoid(), label: "number of seats", name: "number_of_seats", value: "" },
      { id: nanoid(), label: "colour", name: "colour", value: "" },
      { id: nanoid(), label: "number of doors", name: "number_of_doors", value: "" },
      { id: nanoid(), label: "stock number", name: "stock_number", value: "" },
    ],
  },
  {
    title: "conditions",
    inputs: [
      { id: nanoid(), label: "vehicle service History", name: "vehicle_service_history", value: "" },
      {
        id: nanoid(),
        label: "roadworthy voucher",
        name: "roadworthy_voucher",
        value: "",
        isFileInput: true,
      },
      { id: nanoid(), label: "spare key", name: "spare_key", value: "" },
      { id: nanoid(), label: "condition report", name: "condition_report", value: "", isFileInput: true },
      { id: nanoid(), label: "Warranty", name: "warranty", value: "" },
    ],
  },
  {
    title: "perfomance",
    inputs: [
      { id: nanoid(), label: "kilowatts", name: "kilowatts", value: "" },
      { id: nanoid(), label: "cylinder layout", name: "cylinder_layout", value: "" },
      { id: nanoid(), label: "gears", name: "gears", value: "" },
    ],
  },
  {
    title: "Featurers",
    inputs: [
      { id: nanoid(), label: "feature 1", name: "feature_1", value: "" },
      { id: nanoid(), label: "feature 4", name: "feature_2", value: "" },
      { id: nanoid(), label: "feature 2", name: "feature_3", value: "" },
      { id: nanoid(), label: "feature 5", name: "feature_4", value: "" },
      { id: nanoid(), label: "feature 3", name: "feature_5", value: "" },
      { id: nanoid(), label: "feature 6", name: "feature_6", value: "" },
    ],
  },
];
