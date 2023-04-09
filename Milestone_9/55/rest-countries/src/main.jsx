import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Countries from "./components/Countries/Countries";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import First from "./components/First/First";
import CountryDetail from "./components/CountryDetail/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "countries",
        element: <Countries></Countries>,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path: "country/:countryId",
        element: <CountryDetail></CountryDetail>,
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
