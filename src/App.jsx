import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Data from "./data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "./Chart";

export default function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Data /> },
    { path: "/chart/:index", element: <Chart /> },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}