import Home from "./pages/Home";
import Login from "./pages/Login";
import Books from "./pages/Books";
import Signup from "./pages/Signup";
import BookDetail from "./pages/BookDetail";
import ResetPassword from "./pages/ResetPassword";

import Error from "./components/common/Error";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Layout>
        <Home />
      </Layout>,
    errorElement: <Error />
  },
  {
    path: "/books",
    element: 
      <Layout>
        <Books />
      </Layout>,
    errorElement: <Error />
  },
  {
    path: "/book/:bookId",
    element: 
    <Layout>
      <BookDetail />
    </Layout>,
    errorElement: <Error />
  },
  {
    path: "/cart",
    element: 
    <Layout>
      <Cart />
    </Layout>,
    errorElement: <Error />
  },
  {
    path: "/order",
    element: 
    <Layout>
      <Order />
    </Layout>,
    errorElement: <Error />
  },
  {
    path: "/signup",
    element: 
      <Layout>
        <Signup />
      </Layout>,
    errorElement: <Error />
  },
  {
    path: "/reset",
    element: 
      <Layout>
        <ResetPassword />
      </Layout>,
    errorElement: <Error />
  },
  {
    path: "/login",
    element: 
      <Layout>
        <Login />
      </Layout>,
    errorElement: <Error />
  },
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />  
    </BookStoreThemeProvider>
  );
}

export default App;
