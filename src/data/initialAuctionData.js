import { nanoid } from "nanoid";

const initialAuctionData = [
    {
        title: "Overview",
        inputs: [
            { id: nanoid(), label: "start date (pre-bid)", name: "startDate", value: "" },
            { id: nanoid(), label: "bid extension time", name:"extensionTime", value: "", mask: true },
            { id: nanoid(), label: "start time (pre -bid)", name: "startTime", value: "" },
            { id: nanoid(), label: "starting price", name: "startPrice", value: "", mask: true },
            { id: nanoid(), label: "end date (live Auction)", name: "endDate", value: "" },
            { id: nanoid(), label: "end time (Live Auction)", name: "endTime", value: "" },
        ],
    },
];

export default initialAuctionData;
