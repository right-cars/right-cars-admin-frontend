import * as yup from 'yup';

const schema = yup.object({
    make: yup.string().required('make is required'),
    mileageInKm: yup.string().required('km is required'),
    model: yup.string().required('model is required'),
    fuelType: yup.string().required('fuel is required'),
    year: yup.string().required('year is required'),
    transmission: yup.string().required('transmission is required'),
    price: yup.string().required('price is required'),
    driveType: yup.string().required('drive type is required'),
    finance: yup.string().required('finance is required'),
    vehicleCategory: yup.string().required('vehicle category is required'),
    fuelConsumption: yup.string(),
    bodyType: yup.string().required('body type is required'),
    engineCapacity: yup.string(),
    variant: yup.string(),
    numberOfSeats: yup.string(),
    colour: yup.string(),
    numberOfDoors: yup.string(),
    stockNumber: yup.string().required('stock number is required'),
    vehicleServiceHistory: yup.string(),
    spareKey: yup.string(),
    warranty: yup.string(),
    kilowatts: yup.string(),
    cylinderLayout: yup.string(),
    gears: yup.string(),
}).required();

export default schema;
