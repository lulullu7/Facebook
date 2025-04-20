import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const hei=createBrowserRouter([
    {
      element:<Signup/>,
      path:'/Signup'
    },
    {
      element:<Login/>,
      path:'/'
    },
    {
      element:<Home/>,
      path:'/home'
    }
   
  ])
  return (
    <div><RouterProvider router={hei}/> </div>
  )
}

export default App