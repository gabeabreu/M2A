import { Formik, Field, Form } from "formik";
import { InputFormik } from "../../index";
import formSchema from "./formSchema";

const LoginForm = () => {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik onSubmit={handleSubmit} {...formSchema}>
      <Form>
        <InputFormik
          name="email"
          label="Email"
          placeholder="exemplo@gmail.com"
        />

        <InputFormik
          name="password"
          label="Senha"
          placeholder="••••••"
          type="password"
        />

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <Field
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Lembrar dados
            </label>
          </div>

          <div className="text-sm">
            <a
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Esqueceu sua senha?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Entrar
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
