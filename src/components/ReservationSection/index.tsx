import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import validationSchema from "../../Validation/reservationSchema";
import HorizontalDivider from "../HorizontalDivider";
import "./ReservationSection.scss";
import toast from "react-hot-toast";

interface FormFields {
  name: string;
  email: string;
  date: string;
  specialRequest: string;
  numberOfPeople: string;
}

const ReservationSection: React.FC = () => {
  const initialValues: FormFields = {
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

  const [dateTimeType, setDateTimeType] = React.useState<
    "text" | "datetime-local"
  >("text");

  const dateInputRef = React.useRef<HTMLInputElement>(null);

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
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({ errors, touched }: FormikProps<FormFields>) => (
            <Form>
              <div className="form-group">
                <div className="form-field">
                  <Field type="text" name="name" placeholder="Name" />
                  <div className="error-container">
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-message"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <Field type="email" name="email" placeholder="Email" />
                  <div className="error-container">
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="form-field">
                  <Field
                    innerRef={dateInputRef}
                    onClick={() => {
                      setDateTimeType("datetime-local");
                      console.log(dateInputRef.current);
                      setTimeout(() => {
                        if (dateInputRef.current) {
                          dateInputRef.current.showPicker();
                        }
                      }, 0);
                    }}
                    onBlur={(e: { target: { value: string } }) => {
                      if (e.target.value === "") setDateTimeType("text");
                    }}
                    type={dateTimeType}
                    name="date"
                    placeholder="Date & Time"
                  />
                  <div className="error-container">
                    <ErrorMessage
                      name="date"
                      component="div"
                      className="error-message"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <Field
                    type="text"
                    name="numberOfPeople"
                    placeholder="No Of People"
                  />
                  <div className="error-container">
                    <ErrorMessage
                      name="numberOfPeople"
                      component="div"
                      className="error-message"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <Field
                    as="textarea"
                    name="specialRequest"
                    placeholder="Special Request"
                  />
                  <div className="error-container">
                    <ErrorMessage
                      name="specialRequest"
                      component="div"
                      className="error-message"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={Object.keys(errors).some(
                  (key) =>
                    Boolean(touched[key as keyof FormFields]) &&
                    Boolean(errors[key as keyof FormFields])
                )}
              >
                Book Now
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ReservationSection;
