import './App.css';
import React from "react";
import { createRoot } from "react-dom/client";
import HomeSite from './MarketPage/HomeSite';
import Aboutus from './MarketPage/AboutusCpnt/Aboutus';
import Service from './MarketPage/ServiceCpnt/Service';
import HomeUser from './App/User/HomeUser';
import Entreprise from './MarketPage/EntrepriseCpnt/Entreprise';
import Particulier from './MarketPage/ParticulierCpnt/Particulier';
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
      path: "Aboutus",
      element: (<Aboutus />),
    },
    {
      path: "Service",
      element: (<Service />),
    },
    {
      path: "Entreprise",
      element: (<Entreprise />),
    },
    {
      path: "Particulier",
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
