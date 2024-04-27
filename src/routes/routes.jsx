import Layout from "../pages/Layout";
import About from "../pages/About";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/home", element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
