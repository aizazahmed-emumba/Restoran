import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s-]+$/, "Only alphabets, spaces, and hyphens are allowed")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.date()
    .required("Date is required")
    .nullable(),
    numberOfPeople: Yup.number().required("Number of people is required"),
  specialRequest: Yup.string()
    .matches(/^[A-Za-z\s-]*$/, "Only alphabets, spaces, and hyphens are allowed")
    .max(250, "Special request must be at most 250 characters"),
});

export default validationSchema;
