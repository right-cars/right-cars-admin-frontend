"use client";

import {useState, createContext, useContext, ReactNode, useEffect} from "react";

import {getAllUsers} from "@/api/users";

//@ts-expect-error
const createDateOfAdding = createdAt => {
    const [date] = createdAt.split("T");
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
}

const UsersContext = createContext([]);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
    const [users, setUsers] = useState([]);
    const [current, setCurrent] = useState("idle");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | number>("all");
    const [type, setType] = useState<string | number>("all");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("default");
    const [vehicleCategory, setVehicleCategory] = useState("all");

    useEffect(()=> {
        const fetchUsers = async()=> {
            setLoading(true);
            setUsers([]);
            setCurrent("pending");
            try {
                const data = await getAllUsers();
                //@ts-expect-error
                setUsers(data.map(item => ({...item, deposit: item.deposit ? "Yes" : "No", addingDate: createDateOfAdding(item.createdAt)})));
                setCurrent("success");
            }
            catch(error) {
                setCurrent("error");
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, [type, status, search, sort, vehicleCategory]);

    let filteredUsers = users.filter(user => {
        switch (type) {
            case "all":
                return true;
            case "regular":
                // @ts-expect-error
                return user.type === "regular";
            case "dealer":
                // @ts-expect-error
                return user.type === "dealer";
            case "archive":
                // @ts-expect-error
                return user.type === "archive";
            default:
                return true;
        }
    });

    filteredUsers = filteredUsers.filter(user => {
        switch (status) {
            case "all":
                return true;
            case "verified":
                // @ts-expect-error
                return user.status === "verified";
            case "inProgress":
                // @ts-expect-error
                return user.status === "inProgress";
            case "unverified":
                // @ts-expect-error
                return user.status === "unverified";
            default:
                return true;
        }
    });

    if(search) {
        filteredUsers = filteredUsers.filter(user => {
            const normalizedSearch = search.toLowerCase();
            // @ts-expect-error
            return user.fullName.toLowerCase().includes(normalizedSearch.toLowerCase()) || user.surname.toLowerCase().includes(normalizedSearch.toLowerCase()) || user.email.toLowerCase().includes(normalizedSearch.toLowerCase()) || user.mobileNumber.toLowerCase().includes(normalizedSearch.toLowerCase());
        })
    }


    if(sort) {
        if(sort === "fullName") {
            // @ts-expect-error
            filteredUsers.sort((a, b) => a.fullName - b.fullName);
        }
        if(sort === "addingDate") {
            // @ts-expect-error
            filteredUsers.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));
        }
    }

    const value = {
        users: filteredUsers,
        status,
        setStatus,
        loading,
        current,
        setLoading,
        vehicleCategory,
        setVehicleCategory,
        setSearch,
        setSort,
        type,
        setType,
    };

    //@ts-expect-error
    return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>;
}

export const useUsers = () => {
    const context = useContext(UsersContext);
    if (!context) throw new Error('useAuth must be used within an CarsProvider');
    return context;
};
