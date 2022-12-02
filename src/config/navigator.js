import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Informations from '../screens/informations';
import AudioLecture from '../screens/audiolecture';
import Home from '../screens/home';
import CinqPilier from '../screens/cinqpilier';
import Islam from '../screens/islam';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/islam",
    element: <Islam />
  },
  {
    path: "/audiolecture",
    element: <AudioLecture />
  }
 
]);


const Navigator = () => {
    return (
      <RouterProvider router={router} />
    );
};

export default Navigator;