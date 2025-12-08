import * as yup from 'yup';

const schema = yup.object({
    startDate: yup.string().required('startDate is required'),
    extensionTime: yup.string().required('extensionTime is required'),
    startTime: yup.string().required('startTime is required'),
    startPrice: yup.string().required('startPrice is required'),
    endDate: yup.string().required('startPrice is required'),
    endTime: yup.string().required('startPrice is required'),
}).required();

export default schema;
