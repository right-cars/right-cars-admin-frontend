import { nanoid } from "nanoid";

const initialAuctionData = [
    {
        title: "Overview",
        inputs: [
            { id: nanoid(), label: "start date (pre-bid)", name: "startDate", variant: "datepicker", value: "" },
            { id: nanoid(), label: "bid extension time", name:"extensionTime", value: "", mask: true },
            { id: nanoid(), label: "start time (pre -bid)", name: "startTime", value: "", variant: "timepicker" },
            { id: nanoid(), label: "starting price", name: "startPrice", value: "", mask: true },
            { id: nanoid(), label: "end date (live Auction)", name: "endDate", value: "", variant: "datepicker" },
            { id: nanoid(), label: "end time (Live Auction)", name: "endTime", value: "", variant: "timepicker" },
        ],
    },
];

export default initialAuctionData;
