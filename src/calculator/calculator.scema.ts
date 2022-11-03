import * as Yup from 'yup';

export const calculatorSchema = Yup.object({
    body: Yup.object({
        operation_type: Yup.string().required('Operation is required'),
        x: Yup.number().required('x is required'),
        y: Yup.number().required('y is required'),
    })
})