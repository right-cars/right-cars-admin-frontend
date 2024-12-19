import axios from "axios";

const carsInstance = axios.create({
    // baseURL: "https://right-cars-backend-production.up.railway.app/api/cars",
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/cars`,
})

// @ts-expect-error
export const addCar = async car => {
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
// @ts-expect-error
export const updateCarById = async (id: string, payload) => {
    const {data} = await carsInstance.put(`/${id}`, payload);
    return data;
}

// @ts-expect-error
export const updateCarStatusId = async (id: string, payload) => {
    const {data} = await carsInstance.patch(`/${id}/status`, payload);
    return data;
}

export const deleteCarById = async (id: string) => {
    const {data} = await carsInstance.delete(`/${id}`);
    return data;
}

