import { nanoid } from "nanoid";

const initialUserData = [
    { id: nanoid(), label: "name", name: "name", value: "Humeniuk Alina", readonly:true },
    { id: nanoid(), label: "status", name: "status", value: "in progress" },
    { id: nanoid(), label: "email", name: "email", value: "humeniuk1997@gmail.com",readonly:true },
    { id: nanoid(), label: "deposit", name: "deposit", value: "R 0" },
    { id: nanoid(), label: "phone number", name: "phone_number", value: "+2779 394 3434", readonly:true },
    { id: nanoid(), label: "date of adding", name: "date_of_adding", value: "10.14.2023",readonly:true },
    { id: nanoid(), label: "location", name: "location", value: "Capetown",readonly:true },
    // { id: nanoid(), label: "previous deals", name: "previous_deals", value: "12.14.2023", isFileInput: true, },
  ];

export default initialUserData;
