import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Main from "../Layouts/Main"
import Chef from "../Pages/Chef/Chef";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ViewRecipies from "../Pages/Chef/ViewRecipies";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../Pages/Bolg/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoute>
            <ViewRecipies></ViewRecipies>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
]);

export default router