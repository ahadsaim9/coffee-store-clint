import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import Coffee from "./components/Coffee/Coffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/add_coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/update_coffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "/coffee",
        element: <Coffee></Coffee>,
        loader: () => fetch(`http://localhost:50001/add_coffee`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
