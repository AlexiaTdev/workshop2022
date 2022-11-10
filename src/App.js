import './App.css';
import React from "react";
import { createRoot } from "react-dom/client";
import HomeSite from './MarketPage/HomeSite';
import Aboutus from './MarketPage/AboutusCpnt/Aboutus';
import Service from './MarketPage/ServiceCpnt/Service';
import HomeUser from './App/User/HomeUser';
import Entreprise from './MarketPage/Entreprise/Entreprise';
import Particulier from './MarketPage/Particulier/Particulier';
import HomeApp from './App/homeApp';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<HomeSite />),
    },
    {
      path: "aboutus",
      element: (<Aboutus />),
    },
    {
      path: "service",
      element: (<Service />),
    },
    {
      path: "entreprise",
      element: (<Entreprise />),
    },
    {
      path: "particulier",
      element: (<Particulier />),
    },
    {
      path: "logedUser",
      element: <HomeApp/>,
    }
  ]);

  return (
    createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
    )
  );
}

export default App;
