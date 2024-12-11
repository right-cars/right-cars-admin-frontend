import * as yup from 'yup';

const schema = yup.object({
    // make: yup.string().required('make is required'),
    // km: yup.string().required('km is required'),
    // model: yup.string().required('model is required'),
    // fuel: yup.string().required('fuel is required'),
    // year: yup.string().required('year is required'),
    // transmission: yup.string().required('transmission is required'),
    // price: yup.string().required('price is required'),
    // drive_type: yup.string().required('drive type is required'),
    // finance: yup.string().required('finance is required'),
    // fuel_consumption: yup.string().required('fuel consumption is required'),
    // body_type: yup.string().required('body type is required'),
    // engine_capacity: yup.string().required('engine capacity is required'),
    // variant: yup.string().required('variant is required'),
    // number_of_seats: yup.string().required('number of seats is required'),
    // colour: yup.string().required('colour is required'),
    // number_of_doors: yup.string().required('number of doors is required'),
    // stock_number: yup.string().required('stock number is required'),
    // vehicle_service_history: yup.string().required('vehicle service History is required'),
    // roadworthy_voucher: yup.mixed()
    //     .test("required", "You need to provide roadworthy voucher", (value) => {
    //         return Boolean(value);
    //     }),
    // spare_key: yup.string().required('spare key is required'),
    // condition_report: yup.mixed()
    //     .test("required", "You need to condition report", (value) => {
    //         return Boolean(value);
    //     }),
    // warranty: yup.string().required('warranty is required'),
    // kilowatts: yup.string().required('kilowatts is required'),
    // cylinder_layout: yup.string().required('cylinder layout is required'),
    // gears: yup.string().required('gears is required'),
}).required();

export default schema;
