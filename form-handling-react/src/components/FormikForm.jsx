import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Submitting with Formik:", values);
        alert("User registered successfully (mock API call with Formik)");
        resetForm();
      }}
    >
      {() => (
        <Form className="max-w-md mx-auto p-4 border rounded shadow space-y-4">
          <div>
            <label className="block font-medium">Username</label>
            <Field name="username" className="w-full border p-2 rounded" />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Register with Formik
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
