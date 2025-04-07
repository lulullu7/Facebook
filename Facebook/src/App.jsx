import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  const hei=createBrowserRouter([
    {
      element:<Home/>,
      path:'/'
    }
  ])
  return (
    <div><RouterProvider router={hei}/> </div>
  )
}

export default App