import axios from "axios";

const auctionsInstance = axios.create({
    // baseURL: "https://right-cars-backend-production.up.railway.app/api/cars",
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/auctions`,
})

export const getAuctions = async () => {
    const {data} = await auctionsInstance.get("/cars");
    return data;
}

// @ts-expect-error
export const addAuction = async payload => {
    const {data} = await auctionsInstance.post("/", payload);
    return data;
}


