import { Layout } from "src";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: "/", element: <Request /> },
        { path: "login", element: <Login /> },
        { path: "requests", element: <Requests /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
