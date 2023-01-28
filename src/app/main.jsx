import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Destination from '../components/routes/Destination';
import Crew from '../components/routes/Crew';
import Technology from '../components/routes/Technology';
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import '../css/index.css';

/* Navigation */
const router = createHashRouter([
    {
      path: '/',
      element: <App/>,
      errorElement: <h1 style={{color: 'red'}}>Algo salió mal</h1>
    },
    {
      path: '/destination',
      element: <Destination/>
    },
    {
      path: '/crew',
      element: <Crew/>
    },
    {
      path: '/technology',
      element: <Technology/>
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
