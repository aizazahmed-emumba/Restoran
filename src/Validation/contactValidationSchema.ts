import * as Yup from "yup";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s-]+$/, "Only alphabets, spaces, and hyphens are allowed")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string()
    .matches(/^[A-Za-z\s-]+$/, "Only alphabets, spaces, and hyphens are allowed")
    .max(100, "Subject must be at most 100 characters")
    .required("Subject is required"),
  message: Yup.string()
    .matches(/^[A-Za-z\s-]*$/, "Only alphabets, spaces, and hyphens are allowed")
    .max(250, "Message must be at most 250 characters")
    .required("Message is required"),
});

export default contactValidationSchema;
