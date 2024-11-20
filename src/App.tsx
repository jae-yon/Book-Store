import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Login from "@/pages/Login";
import Books from "@/pages/Books";
import Order from "@/pages/Order";
import Signup from "@/pages/Signup";
import OrderList from "@/pages/OrderList";
import BookDetail from "@/pages/BookDetail";
import Error from "@/components/common/Error";
import Layout from "@/components/layout/Layout";
import { queryClient } from "@/api/queryClient";
import ResetPassword from "@/pages/ResetPassword";
import { QueryClientProvider } from "react-query";
import { BookStoreThemeProvider } from "@/context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/book/:bookId",
    element: <BookDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/orderlist",
    element: <OrderList />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />
    }
  })
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookStoreThemeProvider>
        <RouterProvider router={router} />  
      </BookStoreThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
