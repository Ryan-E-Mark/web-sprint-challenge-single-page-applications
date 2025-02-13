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
    pepperoni: yup.boolean(),
    redpepper: yup.boolean(),
    salami: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean(),
    redonion: yup.boolean(),
    garlic: yup.boolean(),
    chicken: yup.boolean(),
    tomatoes: yup.boolean(),
    greenpepper: yup.boolean(),
    
    special: yup
        .string()
        .trim(),
})

export default formSchema;