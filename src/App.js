import './App.css';
import React from "react";
import { createRoot } from "react-dom/client";
import HomeSite from './MarketPage/HomeSite';
import Aboutus from './MarketPage/Aboutus';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<HomeSite />),
    },
    {
      path: "about",
      element: (<Aboutus />),
    },
  ]);

  return (
    createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
    )
  );
}

export default App;
