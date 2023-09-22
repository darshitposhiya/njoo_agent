import * as yup from 'yup';

export const loginValidate = {
    initialState: { username: '', password: '', rolle: '' },
    schema: yup.object().shape({
        username: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is must be required"),
        password: yup
            .string()
            .min(4)
            .trim()
            .required('Password is must be required'),
    })
}

export const forgotPasswordValidate = {
    initialState: { email: '' },
    schema: yup.object().shape({
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is must be required"),
    })
}

export const resetPasswordValidate = {
    initialState: { password: '', confirmPassword: '' },
    schema: yup.object().shape({
        password: yup
            .string()
            .min(4)
            .trim()
            .required('Password is must be required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], "Password must match")
            .trim()
            .required('Confirm password is must be required'),
    })
}

export const registerValidate = {
    initialState: { first_name: '', last_name: '', phone_code: '', phone: '', password: '', email: '' },
    schema: yup.object().shape({
        first_name: yup
            .string()
            .min(2, "First name must be at least 2 characters")
            .trim()
            .required('First name is must be required'),
        last_name: yup
            .string()
            .min(2, "Last name must be at least 2 characters")
            .trim()
            .required('Last name is must be required'),
        phone_code: yup
            .string()
            .required('Country code'),
        phone: yup
            .string()
            .min(7, "Please enter a valid mobile number.")
            .max(15, "Please enter a valid mobile number.")
            .matches(/^[0-9]+$/)
            .trim()
            .required('Phone number is must be required'),
        password: yup
            .string()
            .min(4)
            .trim()
            .required('Password is must be required'),
        email: yup
            .string()
            .email("Email must be a valid email")
            // .matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            .required("Email is must be required"),
    })
}

export const chooseYourLocationValidate = {
    initialState: { country: '', state: '', city: '', postal_code: '', address: '' },
    schema: yup.object().shape({
        country: yup
            .string()
            .trim()
            .required('Country is must be required'),
        state: yup
            .string()
            .trim()
            .required('state is must be required'),
        city: yup
            .string()
            .trim()
            .required('City is must be required'),
        postal_code: yup
            .string()
            .trim()
            .required('Postal code is must be required'),
        address: yup
            .string()
            .trim()
            .required('Address is must be required'),
    })
}

export const changePasswordValidate = {
    initialState: { old_password: '', password: '', confirmPassword: '' },
    schema: yup.object().shape({
        old_password: yup
            .string()
            .min(4)
            .trim()
            .required('Password is must be required'),
        password: yup
            .string()
            .min(4)
            .trim()
            .required('Password is must be required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], "Password must match")
            .trim()
            .required('Confirm password is must be required'),
    })
}

export const editProfileValidate = {
    initialState: { first_name: '', last_name: '', phone_code: '', phone: '', email: '', country: '', state: '', city: '', postal_code: '', address: '' },
    schema: yup.object().shape({
        first_name: yup
            .string()
            .min(2, "First name must be at least 2 characters")
            .trim()
            .required('First name is must be required'),
        last_name: yup
            .string()
            .min(2, "Last name must be at least 2 characters")
            .trim()
            .required('Last name is must be required'),
        phone_code: yup
            .string()
            .required('Country code is must be required'),
        phone: yup
            .string()
            .min(7, "Please enter a valid mobile number.")
            .max(15, "Please enter a valid mobile number.")
            .matches(/^[0-9]+$/)
            .trim()
            .required('Phone number is must be required'),
        email: yup
            .string()
            .email("Email must be a valid email")
            .required("Email is must be required"),
        country: yup
            .string()
            .trim()
            .required('Country is must be required'),
        state: yup
            .string()
            .trim()
            .required('state is must be required'),
        city: yup
            .string()
            .trim()
            .required('City is must be required'),
        postal_code: yup
            .string()
            .trim()
            .required('Postal code is must be required'),
        address: yup
            .string()
            .trim()
            .required('Address is must be required'),

    })
}

export const recipientDetailsValidate = {
    initialState: { f_name: '', l_name: '', country: '', city: '', email: '', phone: '', },
    schema: yup.object().shape({
        f_name: yup
            .string()
            .min(2, "First name must be at least 2 characters")
            .trim()
            .required('First name is must be required'),
        l_name: yup
            .string()
            .min(2, "Last name must be at least 2 characters")
            .trim()
            .required('Last name is must be required'),
        country: yup
            .string()
            .trim()
            .required('Country is must be required'),
        city: yup
            .string()
            .trim()
            .required('City is must be required'),
        phone: yup
            .string()
            .min(7, "Please enter a valid mobile number.")
            .max(15, "Please enter a valid mobile number.")
            .matches(/^[0-9]+$/)
            .trim()
            .required('Phone number is must be required'),
    })
}

export const sendingMoneyToCountryValidate = {
    initialState: { sender_country: '', receiver_country: '', sender_amount: '', receiver_amount: '', xvalue_amount: '' },
    schema: yup.object().shape({
        sender_country: yup
            .string()
            .trim()
            .required('Country is must be required'),
        receiver_country: yup
            .string()
            .trim()
            .required('Country is must be required'),
        sender_amount: yup
            .string()
            .required('Price is required')
            // .matches(/.(0|[1-9])./)
            .matches(/^[0-9]+$/),
        receiver_amount: yup
            .string()
            .required('Price is required'),
        xvalue_amount: yup
            .string()
            .required('Price is required')
    })
}
