import type { RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/home.page";

const normalRoutes: RouteObject = {
  path: "*",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "xxx123",
      element: <HomePage />, // Replace with more pages
    },
    {
      path: "*",
      element: <HomePage /> // Replace with 404 page
    }
  ],
};

const routes: RouteObject[] = [normalRoutes];

export default routes;
