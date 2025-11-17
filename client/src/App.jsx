import { Layout } from "./components/layout/layout";
import { Request } from "./pages/request/request";
import { Login } from "./pages/login/login";
import { Requests } from "./pages/requests/requests-list";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Request /> },
        { path: "login", element: <Login /> },
        { path: "requests", element: <Requests /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
