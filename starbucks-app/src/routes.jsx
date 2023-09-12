import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/navbar/Layout";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import CategoriesPage from "./components/pages/CategoriesPage";
import MenuPage from "./components/pages/MenuPage";
import MenuForm from "./components/forms/MenuForm";
import ItemDetail from "./components/pages/ItemDetail";

const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/categories",
          element: <CategoriesPage />,
          loader: auth,
        },
        {
          path: "/menus",
          element: <MenuPage />,
          loader: auth,
        },
        {
          path: "/register",
          element: <RegisterForm />,
          loader: auth,
        },
        {
          path: "/menu-form",
          element: <MenuForm />,
          loader: auth,
        },
        {
          path: "/menu-form/:id",
          element: <MenuForm />,
          loader: auth,
        },
        {
          path: "/details/:id",
          element: <ItemDetail />,
        },
      ],
    },
    {
      path: "/",
      element: <LoginForm />,
      loader: authLogin,

    },
  ]);
    
  function auth() {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw redirect("/");
    }
    return null
  }
  function authLogin() {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
        throw redirect("/menus");
    }
    return null

}

export default router
