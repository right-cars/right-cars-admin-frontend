import { nanoid } from "nanoid";

export const personalDetailsData = [
    { id: nanoid(), label: "fullName", name: "fullName", value: "", readonly:false },
    { id: nanoid(), label: "surname", name: "surname", value: "", readonly:false },
    { id: nanoid(), label: "email", name: "email", value: "humeniuk1997@gmail.com",readonly:false },
    { id: nanoid(), label: "phone number", name: "mobileNumber", value: "", readonly:false },
    // { id: nanoid(), label: "date of adding", name: "date_of_adding", value: "10.14.2023",readonly:true },
    // { id: nanoid(), label: "location", name: "location", value: "Capetown",readonly:true },
    // { id: nanoid(), label: "previous deals", name: "previous_deals", value: "12.14.2023", isFileInput: true, },
  ];

export const addressData = [
    { id: nanoid(), label: "Physical home Address", name: "physicalAddress", value: "", readonly:false },
    { id: nanoid(), label: "postal Address", name: "postalPhysicalAddress", value: "", readonly:false },
    { id: nanoid(), label: "suburb", name: "suburb", value: "", readonly:false },
    { id: nanoid(), label: "postal suburb", name: "postalSuburb", value: "", readonly:false },
    { id: nanoid(), label: "city/town", name: "cityOrTown", value: "", readonly:false },
    { id: nanoid(), label: "postal city/town", name: "postalCityOrTown", value: "", readonly:false },
    { id: nanoid(), label: "code", name: "code", value: "", readonly:false },
    { id: nanoid(), label: "postal code", name: "postalCode", value: "", readonly:false },
    // { id: nanoid(), label: "surname", name: "surname", value: "", readonly:false },
    // { id: nanoid(), label: "email", name: "email", value: "humeniuk1997@gmail.com",readonly:false },
    // { id: nanoid(), label: "phone number", name: "mobileNumber", value: "", readonly:false },
    // { id: nanoid(), label: "date of adding", name: "date_of_adding", value: "10.14.2023",readonly:true },
    // { id: nanoid(), label: "location", name: "location", value: "Capetown",readonly:true },
    // { id: nanoid(), label: "previous deals", name: "previous_deals", value: "12.14.2023", isFileInput: true, },
];
