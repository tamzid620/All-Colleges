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
import Admission from './components/Pages/Admission/Admission';
import Layout from './components/Shared/Layout/Layout';
import MyCollege from './components/Pages/MyCollege/MyCollege';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/colleges",
        element: <Colleges/>,
      },
      {
        path: "/admission",
        element: <Admission/>
      },
      {
        path:'/mycollege',
        element:<MyCollege/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
