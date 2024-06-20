import React from "react";
import { Formik, Form, Field } from "formik";
import validationSchema from "../../Validation/reservationSchema";
import HorizontalDivider from "../HorizontalDivider";
import "./ReservationSection.scss";
import toast from "react-hot-toast";

const ReservationSection: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    specialRequest: "",
    numberOfPeople: "",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    toast.success("Form submitted successfully!");
    console.log(values);
    setSubmitting(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleValidationError = (errors: any) => {
    for (const key in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, key)) {
        toast.error(errors[key]);
      }
    }
  };

  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-section-img">
        <img src="/reservation.png" alt="reservation" />
      </div>
      <div className="reservation-section-content">
        <h2>
          Reservation <HorizontalDivider />
        </h2>
        <h1>Book A table Online</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ validateForm }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                validateForm().then((errs) => {
                  if (Object.keys(errs).length > 0) {
                    handleValidationError(errs);
                  } else {
                    handleSubmit(initialValues, { setSubmitting: () => {} });
                  }
                });
              }}
            >
              <div className="form-group">
                <Field type="text" name="name" placeholder="Name" />
                <Field type="email" name="email" placeholder="Email" />
              </div>

              <div className="form-group">
                <Field type="date" name="date" placeholder="Date" />
                <Field
                  type="text"
                  name="numberOfPeople"
                  placeholder="No Of People"
                />
              </div>
              <div className="form-group">
                <Field
                  as="textarea"
                  name="specialRequest"
                  placeholder="Special Request"
                />
              </div>
              <button type="submit">Book Now</button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ReservationSection;
