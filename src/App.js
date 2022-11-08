import './App.css';
import React from "react";
import { createRoot } from "react-dom/client";
import HomeSite from './MarketPage/HomeSite';
import HomeUser from './App/User/HomeUser';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomeSite/>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "logedUser",
      element: <HomeUser/>,
    }
  ]);

  return (
    createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
    )
  );
}

export default App;
