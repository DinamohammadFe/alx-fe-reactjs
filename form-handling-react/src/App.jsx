import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-center">Form Handling in React</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2">Controlled Components</h2>
        <RegistrationForm />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Formik Form</h2>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
