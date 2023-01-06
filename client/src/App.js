import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

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
          element: <p>Hello from login</p>,
        },
        {
          path: "/cart/:id?",
          element: <Cart />,
        },
        {
          path: "/update/:id",
          element: <p>Hello from update</p>,
        },
        {
          path: "/product/:id",
          element: <ProductPage />,
        },
        {
          path: "/register",
          element: <p>Hello from register</p>,
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
