import { nanoid } from "nanoid";

export const initialUserData = [
    { id: nanoid(), label: "name", value: "Humeniuk Alina", readonly:true },
    { id: nanoid(), label: "status", value: "in progress" },
    { id: nanoid(), label: "email", value: "humeniuk1997@gmail.com",readonly:true },
    { id: nanoid(), label: "deposit", value: "R 0" },
    { id: nanoid(), label: "phone number", value: "+2779 394 3434", readonly:true },
    { id: nanoid(), label: "date of adding", value: "10.14.2023",readonly:true },
    { id: nanoid(), label: "location", value: "Capetown",readonly:true },
    { id: nanoid(), label: "previous deals", value: "", isFileInput: true, },
  ]
