import axios from "axios";

// const {NEXT_PUBLIC_API_URL: baseURL} = process.env;

const carsInstance = axios.create({
    baseURL: "https://right-cars-backend-production.up.railway.app/api/cars",
})

// @ts-expect-error
export const addCar = async car => {
    console.log(car);
    const {data} = await carsInstance.post("/", car, {
        headers: {
            'Content-Type': 'multipart/form-data', // Заголовок укажется автоматически, но можно задать явно
        },
    });
    console.log(data);
    return data;
}

export const getAllCars = async () => {
    const {data} = await carsInstance.get("/");
    return data;
}

export const getCarById = async (id: string) => {
    const {data} = await carsInstance.get(`/${id}`);
    return data;
}
