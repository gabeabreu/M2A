import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Authentication from "../pages/Authentication";
import Companies from "../pages/Companies";
import Diagnostics from "../pages/Diagnostics";
import Questionnaires from "../pages/Questionnaires";
import Users from "../pages/Users";
import { useSelector } from "../redux/hooks";
import { CustomBrowserRouter } from "./CustomBrowserRouter";

const Router = () => {
  const { account } = useSelector((state) => state);
  const isAuthenticated = account.token;
  // console.log(isAuthenticated);
  return (
    <CustomBrowserRouter basename={"/"}>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/companies" /> : <Authentication />
          }
        />
        <Route
          path="companies"
          element={isAuthenticated ? <Companies /> : <Authentication />}
        />
        <Route
          path="questionnaires"
          element={isAuthenticated ? <Questionnaires /> : <Authentication />}
        />
        <Route
          path="diagnostics"
          element={isAuthenticated ? <Diagnostics /> : <Authentication />}
        />
        <Route
          path="users"
          element={isAuthenticated ? <Users /> : <Authentication />}
        />
      </Routes>
    </CustomBrowserRouter>
  );
};

export default Router;
