import { Formik, Field, Form } from "formik";
import { InputFormik, SelectFormik } from "../../index";
import formSchema from "./formSchema";

const RegisterForm = () => {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      onSubmit={(values) => {
        console.log(values);
      }}
      {...formSchema}
    >
      <Form>
        <div className="flex">
          <div className="md:col-span-2">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="flex flex-col col-span-12 sm:col-span-6">
                <InputFormik name="nome" placeholder="João" label="Nome" />
              </div>
              <div className="flex flex-col col-span-12 sm:col-span-6">
                <InputFormik
                  name="sobrenome"
                  placeholder="Silva"
                  label="Sobrenome"
                />
              </div>

              <div className="flex flex-col col-span-12 sm:col-span-7">
                <InputFormik
                  name="email"
                  placeholder="exemplo@email.com"
                  label="Email"
                />
              </div>
              <div className="flex flex-col col-span-12 sm:col-span-5">
                <InputFormik
                  name="telefone"
                  placeholder="(00) 0 0000-0000"
                  label="Telefone"
                />
              </div>
              <div className="col-span-12 sm:col-span-6">
                <SelectFormik
                  name="uf"
                  placeholder="DF"
                  label="Estado"
                  data={[
                    { name: "Test", key: "test" },
                    { name: "Test2", key: "test2" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrar
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
