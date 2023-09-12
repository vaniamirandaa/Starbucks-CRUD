import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/navbar/Layout";
import LandingPage from "./components/pages/LandingPage";
import UserMenuPage from "./components/pages/UserMenuPage";
import ItemDetail from "./components/pages/ItemDetail";

const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/u/menus",
          element: <UserMenuPage />,
        },
        {
          path: "/details/:id",
          element: <ItemDetail />,
        },
      ],
    }
  ]);


export default router
