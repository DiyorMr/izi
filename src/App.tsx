import { createBrowserRouter, RouterProvider } from "react-router";
import { About, Home } from "./pages";
import Layout from "./layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Layout>
        <Home />
      </Layout>,
  },
  {
    path: "/about-us",
    element:
      <Layout>
        <About />
      </Layout>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
