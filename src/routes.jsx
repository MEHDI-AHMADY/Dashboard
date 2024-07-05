import Home from "./Pages/home/Home.jsx";
import Products from "./Pages/products/Products.jsx";
import NewUser from "./Pages/newUser/NewUser.jsx";
import UserList from "./Pages/users/UserList.jsx";
import Product from "./Pages/product/Product.jsx";
import NewProduct from "./Pages/newProduct/NewProduct.jsx";
import Login from "./Pages/login/Login.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import Page404 from "./Pages/404/Page404.jsx";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
  { path: "/login", element: <Login /> },
  {
    path: "/newUser",
    element: (
      <PrivateRoutes>
        <NewUser />
      </PrivateRoutes>
    ),
  },
  {
    path: "/newProduct",
    element: (
      <PrivateRoutes>
        <NewProduct />
      </PrivateRoutes>
    ),
  },

  {path : '/*' , element : <Page404 />}
];

export default routes;
