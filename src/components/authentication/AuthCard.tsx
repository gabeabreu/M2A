import { useState } from "react";

const AuthCard = () => {
  const [currentScreen, setCurrentScreen] = useState("login");

  return (
    <div className="self-center bg-white md:shadow-xl min-h-[45rem] flex max-w-6xl rounded-2xl overflow-hidden duration-500">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-20 lg:px-20 xl:px-24 duration-500">
        <div className="mx-auto w-full max-w-sm lg:max-w-lg duration-500">
          <div>
            <img
              className="h-20 mx-auto w-auto"
              src={require("../../assets/images/logo.png")}
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {currentScreen === "login"
                ? "Faça login em sua conta"
                : "Registre-se agora"}
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Senha
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                {currentScreen === "login" && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
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
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Esqueceu sua senha?
                      </a>
                    </div>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {currentScreen === "login" ? "Entrar" : "Cadastrar-se"}
                  </button>
                </div>
                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      {currentScreen === "login"
                        ? "Ou registre-se"
                        : "Ou entre"}
                    </span>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="mt-1 ">
                      <div>
                        <button
                          type="button"
                          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                          onClick={() =>
                            setCurrentScreen((state) =>
                              state === "login" ? "register" : "login"
                            )
                          }
                        >
                          <span>
                            {currentScreen === "login"
                              ? "Cadastrar-se"
                              : "Entrar"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
