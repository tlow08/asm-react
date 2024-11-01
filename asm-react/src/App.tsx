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
import CheckOut from "./pages/CheckOut";
import ListOrder from "./pages/admin/ListOrder";
import BankTransfer from "./pages/BankTransfer";
import PaymentOld from "./pages/PaymentOld";

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
        { path: "/checkout", element: <CheckOut />},
        { path: "/bank-transfer", element: <BankTransfer />},
        { path: "/payment-old", element: <PaymentOld />},
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
            { path: "orders", element: <ListOrder /> },
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
