import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Register from "../Login/Register";
import Login from "../Login/Login";
import Category from "../Pages/Category";
import AddProducts from "../Pages/AddProducts";
import MyCart from "../Pages/MyCart";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import UpdateProducts from "../Pages/UpdateProducts";

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
        path: "/updateProducts/:id",
        element: <UpdateProducts />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/mycart",
        element: <MyCart />,
        loader: () => fetch("http://localhost:5000/addtoCart"),
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/productdetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);
export default router;
