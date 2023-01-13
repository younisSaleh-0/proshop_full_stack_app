import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import PaymentMethod from "./pages/PaymentMethod";
import PlaceOrder from "./pages/PlaceOrder";

const App = () => {
  // Layout
  const Layout = () => {
    return (
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Outlet />
          </Container>
        </main>

        <Footer />
      </>
    );
  };

  // Create browser routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/cart/:id?",
          element: <Cart />,
        },
        {
          path: "/shipping",
          element: <Shipping />,
        },
        {
          path: "/paymentMethod",
          element: <PaymentMethod />,
        },
        {
          path: "/placeOrder",
          element: <PlaceOrder />,
        },
        {
          path: "/update/:id",
          element: <p>Hello from update</p>,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/product/:id",
          element: <ProductPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
