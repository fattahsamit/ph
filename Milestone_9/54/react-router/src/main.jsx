import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./error-page";
import Home from "./components/Home/Home";
import First from "./components/First/First";
import Friends from "./components/Friends/Friends";
import FriendDetail from "./components/FriendDetail/FriendDetail";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
