import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Error from "./components/common/Error";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";

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
    element: <Layout><div>도서 목록</div></Layout>,
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
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />  
    </BookStoreThemeProvider>
  );
}

export default App;
