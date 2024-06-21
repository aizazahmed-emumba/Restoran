import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import contactValidationSchema from "../../Validation/contactValidationSchema";
import HorizontalDivider from "../../components/HorizontalDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./ContactUsPage.scss";
import toast from "react-hot-toast";
import GoogleMaps from "../../components/GoogleMaps";

const ContactUsPage: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any, { setSubmitting }: any) => {
    toast.success("Message sent successfully!");
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="contactpage">
      <div className="hero-section">
        <h1>Contact Us</h1>
        <div className="contact-nav">
          <a>HOME</a>
          <span>/</span>
          <a>CONTACT</a>
        </div>
      </div>

      <section className="contact-us-section">
        <h2>
          <HorizontalDivider /> Contact Us <HorizontalDivider />
        </h2>
        <h1>Contact For Any Query</h1>
        <div className="contact-us-container">
          <div className="contact-us-details">
            <div className="detail-item">
              <h2>
                Booking <HorizontalDivider />
              </h2>
              <div className="flex">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p>Booking@example.com</p>
              </div>
            </div>
            <div className="detail-item">
              <h2>
                General <HorizontalDivider />
              </h2>
              <div className="flex">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p>General@example.com</p>
              </div>
            </div>
            <div className="detail-item">
              <h2>
                Technical <HorizontalDivider />
              </h2>
              <div className="flex">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <p>Technical@example.com</p>
              </div>
            </div>
          </div>
          <div className="map-form-container">
            <div className="map-container">
              <GoogleMaps />
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={contactValidationSchema}
              onSubmit={handleSubmit}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {() => (
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
                      <Field type="text" name="subject" placeholder="Subject" />
                      <div className="error-container">
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group last">
                    <div className="form-field">
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Message"
                      />
                      <div className="error-container">
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="error-message"
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit">Send Message</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
