import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Pages/Home/Home.jsx';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage.jsx';
import Colleges from './components/Pages/Colleges/Colleges.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/colleges",
        element: <Colleges/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
