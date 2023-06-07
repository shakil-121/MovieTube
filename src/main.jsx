import React from 'react'
import ReactDOM from 'react-dom/client' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Main from './Layout/Main';
import MovieDetails from './Pages/Home/AllMovies/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/moviedetails/:id", 
        element:<MovieDetails></MovieDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
