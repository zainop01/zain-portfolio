import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { FaWindowMinimize, FaWindowMaximize, FaTimes } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
  agreeToTerms: Yup.bool().oneOf([true], "You must agree to the terms and privacy policy"),
});

const MyForm = () => {
  const sendEmail = (values) => {
    emailjs
      .send("service_nmdvcuw", "template_49py5qf", values, "QoWZREm65NOVeDZhD")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Formik
      initialValues={{ fullName: "", company: "", email: "", message: "", agreeToTerms: false }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        sendEmail(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting, isValid }) => (
        <div className="form-container">
          <Form className="">
            <div className="form-top">
              <h3 className="m-0 p-0">write-me</h3>
              <div className="icons">
                <i>
                  <FaWindowMinimize />
                </i>
                <i>
                  <FaWindowMaximize />
                </i>
                <i>
                  <FaTimes />
                </i>
              </div>
            </div>

            <div className="form-inner-container">
              <div className="my-4">
                <div className="full-name form-lables">
                  full-name<span style={{ color: "red" }}>*</span>
                </div>
                <Field type="text" name="fullName" />
                <ErrorMessage name="fullName" component="div" className="error" />
              </div>

              <div className="my-4">
                <div className="company form-lables">company</div>
                <Field type="text" name="company" />
              </div>

              <div className="my-4">
                <div className="email form-lables">
                  email<span style={{ color: "red" }}>*</span>
                </div>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="my-4">
                <div className="message form-lables">
                  your-message<span style={{ color: "red" }}>*</span>
                </div>
                <Field as="textarea" name="message" />
                <ErrorMessage name="message" component="div" className="error" />
              </div>

              <div className="my-4">
                <label>
                  <Field type="checkbox" name="agreeToTerms" />
                  <span className="checkbox-text">I agree with the terms and privacy policy</span>
                </label>
                <ErrorMessage name="agreeToTerms" component="div" className="error" />
              </div>

              <button className="form-btn"  type="submit" disabled={isSubmitting || !isValid}>
                submit-message
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default MyForm;
