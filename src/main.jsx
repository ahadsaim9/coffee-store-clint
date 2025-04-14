import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import Coffee from "./components/Coffee/Coffee.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Home from "./components/Home/Home.jsx";
import Coffees from "./components/Coffees/Coffees.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./components/Users/Users.jsx";
import CoffeeDetails from "./components/CoffeeDetails/CoffeeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:50001/coffee"),
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/coffee",
        element: <Coffee></Coffee>,
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("http://localhost:50001/coffee"),
      },
      {
        path: "/add_coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
      },

      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:50001/coffee/${params.id}`),
      },

      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:50001/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
