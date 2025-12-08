import axios from 'axios';

const authInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/admins`,
})

// @ts-expect-error
export const login = async payload => {
    const {data} = await authInstance.post('/login', payload);
    return data;
}

export const logout = async()=> {
    const {data} = await authInstance.post('/logout', {}, );
    return data;
}
