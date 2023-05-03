import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Superheroes from "./pages/Superheroes";
import RQSuperheroes from "./pages/RQSuperheroes";
import Layout from "./Layout";
import Sample from "./pages/Sample";
import Colors from "./pages/Colors";
import InfiniteQuery from "./pages/InfiniteQuery";
import PostMethodExample from "./pages/PostMethodExample";
import PostMethodOptimisticUpdate from "./pages/PostMethodOptimisticUpdate";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/superheroes",
        element: <Superheroes />,
      },
      {
        path: "/rqsuperheroes",
        element: <RQSuperheroes />,
      },
      {
        path: "/sample",
        element: <Sample />,
      },
      {
        path: "/colors",
        element: <Colors />,
      },
      {
        path: "/infinite",
        element: <InfiniteQuery />,
      },
      {
        path: "/post",
        element: <PostMethodExample />,
      },
      {
        path: "/optimistic",
        element: <PostMethodOptimisticUpdate />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
