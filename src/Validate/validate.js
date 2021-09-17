import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('A name for the order is required!')
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'extralarge'], 'You must pick a size for your pizza!'),
    sauce: yup
        .string()
        .oneOf(['traditional', 'garlicbutter', 'bbq', 'none'], 'You must pick a sauce for your pizza!'),

})

export default formSchema;