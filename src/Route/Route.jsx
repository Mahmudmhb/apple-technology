import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Register from "../Login/Register";
import Login from "../Login/Login";
import Category from "../Pages/Category";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/addproducts",
        element: <AddProducts />,
      },
      {
        path: "/mycart",
        element: <MyCart />,
      },
    ],
  },
]);
export default router;
