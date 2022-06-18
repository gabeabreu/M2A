import { Formik } from "formik";
import formSchema from "./formSchema";

const FormikForm = () => {
  function handleSubmit(values) {
    console.log(values);
  }

  return <Formik onSubmit={handleSubmit} {...formSchema}></Formik>;
};

export default FormikForm;
