import { useRoutes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import ClientLayout from "./layouts/ClientLayout";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ListProduct from "./pages/admin/ListProduct";
import PrivateRouter from "./components/PrivateRouter";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const routerConfig = [
    {
      path: "",
      element: <ClientLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/shop", element: <Shop /> },
        { path: "/product/:id", element: <ProductDetail /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/cart", element: <ShoppingCart />},
      ],
    },
    {
      path: "/admin",
      element: <PrivateRouter />,
      children: [
        {
          path: "",
          element: <AdminLayout />,
          children: [
            { path: "dashboard", element: <Dashboard /> },
            { path: "products", element: <ListProduct /> },
            { path: "products/add", element: <AddProduct/>},
            { path: "products/edit/:id", element: <EditProduct/>}
          ],
        },
      ],
    },
  ];
  const routes = useRoutes(routerConfig);
  return (
    <>
      <div>{routes}</div>
      <Toaster />
    </>
  );
}

export default App;
