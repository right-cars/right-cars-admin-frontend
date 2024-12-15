import {useState, createContext, useContext, ReactNode, useEffect} from "react";

import {getAllCars, deleteCarById, updateCarStatusId} from "@/api/cars";

const CarsContext = createContext([]);

export const CarsProvider = ({ children }: { children: ReactNode }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | number>("all");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("default");
    const [type, setType] = useState("all");

    useEffect(()=> {
        const fetchCars = async()=> {
            setLoading(true);
            try {
                const data = await getAllCars();
                setCars(data);
            }
            catch(error) {
                console.log(error);
            }
            finally {
                setLoading(false);

            }
        }

        fetchCars();
    }, [status, search, sort, type]);

    // @ts-expect-error
    const deleteCar = async id => {
        try {
            await deleteCarById(id);
            // @ts-expect-error
            setCars(prevCars => prevCars.filter(item => item._id !== id));
        }
        catch (error) {
            console.log(error);
        }
    }

    // @ts-expect-error
    const updateCarStatus = async (id, status) => {
        try {
            await updateCarStatusId(id, {status});
            setCars(prevCars => {
                const copy = [...prevCars];
                // @ts-expect-error
                const index = copy.findIndex(item => item._id === id);
                // @ts-expect-error
                copy[index] = {...copy[index], status};
                return copy;
            })
        }
        catch(error) {
            console.log(error);
        }
    }

    let filteredCars = cars.filter(car => {
        switch (status) {
            case "all":
                return true;
            case "active":
                // @ts-expect-error
                return car.status === "active";
            case "deposit":
                // @ts-expect-error
                return car.status === "deposit";
            case "archive":
                // @ts-expect-error
                return car.status === "archive";
            default:
                return true;
        }
    });

    filteredCars = filteredCars.filter(car => {
        switch (type) {
            case "all":
                return true;
            case "cars":
                // @ts-expect-error
                return car.type === "cars";
            case "bakkie":
                // @ts-expect-error
                return car.type === "bakkie";
            case "commercial":
                // @ts-expect-error
                return car.type === "commercial";
            default:
                return true;
        }
    });

    if(search) {
        filteredCars = filteredCars.filter(car => {
            const normalizedSearch = search.toLowerCase();
            // @ts-expect-error
            return car.make.toLowerCase().includes(normalizedSearch.toLowerCase()) || car.model.toLowerCase().includes(normalizedSearch.toLowerCase());
        })
    }

    if(sort) {
        if(sort === "price") {
            // @ts-expect-error
            filteredCars.sort((a, b) => a.price - b.price);
        }
        if(sort === "date") {
            // @ts-expect-error
            filteredCars.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt));
        }
    }

    const value = {
        cars: filteredCars,
        status,
        setStatus,
        loading,
        setLoading,
        type,
        setType,
        setSearch,
        setSort,
        deleteCar,
        updateCarStatus,
    };

    //@ts-expect-error
    return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
}

export const useCars = () => {
    const context = useContext(CarsContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
