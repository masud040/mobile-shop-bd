import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import UpdateProduct from "../pages/Update/UpdateProduct";
import ProductDetails from "../pages/Details/ProductDetails";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-rlmxwnicm.vercel.app/cartProducts"
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-and-electronics-server-rlmxwnicm.vercel.app/detailsProducts/${params.id}`
          ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-and-electronics-server-rlmxwnicm.vercel.app/detailsProducts/${params.id}`
          ),
      },
      {
        path: "/brands/:brandName",
        element: <BrandDetails />,
        loader: ({ params }) =>
          fetch(
            `https://technology-and-electronics-server-rlmxwnicm.vercel.app/products/${params.brandName}`
          ),
      },
    ],
  },
]);

export default Router;
