import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
