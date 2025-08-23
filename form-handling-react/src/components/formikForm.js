import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formikForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form data", values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default formikForm;
