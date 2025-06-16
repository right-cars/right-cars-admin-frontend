import axios from "axios";

const usersInstance = axios.create({
    // baseURL: "https://right-cars-backend-production.up.railway.app/api/cars",
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/users`,
})

export const getAllUsers = async () => {
    const {data} = await usersInstance.get("/");
    return data;
}

export const getUserById = async (id: string) => {
    const {data} = await usersInstance.get(`/admin/${id}`);
    return data;
}
// @ts-expect-error
export const updateUserById = async (id: string, payload) => {
    const {data} = await usersInstance.put(`/admin/${id}`, payload);
    return data;
}

export const deleteDocumentById = async (id: string, name: string) => {
    const {data} = await usersInstance.delete(`/documents/${id}`, {
        params: {
            name,
        }
    });
    return data;
}

//
// // @ts-expect-error
// export const updateCarStatusId = async (id: string, payload) => {
//     const {data} = await carsInstance.patch(`/${id}/status`, payload);
//     return data;
// }
//
// export const deleteCarById = async (id: string) => {
//     const {data} = await carsInstance.delete(`/${id}`);
//     return data;
// }

