import * as yup from 'yup';

const schema = yup.object({
    make: yup.string().required('make is required'),
    km: yup.string().required('km is required'),
    model: yup.string().required('model is required'),
    fuel: yup.string().required('fuel is required'),
    year: yup.string().required('year is required'),
    transmission: yup.string().required('transmission is required'),
    price: yup.string().required('price is required'),
    drive_type: yup.string().required('drive type is required'),
    finance: yup.string().required('finance is required'),
    fuel_consumption: yup.string(),
    body_type: yup.string().required('body type is required'),
    engine_capacity: yup.string(),
    variant: yup.string(),
    number_of_seats: yup.string(),
    colour: yup.string(),
    number_of_doors: yup.string(),
    stock_number: yup.string().required('stock number is required'),
    vehicle_service_history: yup.string(),
    // roadworthy_voucher: yup.mixed()
    //     .test("required", "You need to provide roadworthy voucher", (value) => {
    //         return Boolean(value);
    //     }),
    spare_key: yup.string(),
    // condition_report: yup.mixed()
    //     .test("required", "You need to condition report", (value) => {
    //         return Boolean(value);
    //     }),
    warranty: yup.string(),
    kilowatts: yup.string(),
    cylinder_layout: yup.string(),
    gears: yup.string(),
}).required();

export default schema;
