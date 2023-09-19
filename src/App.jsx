import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Web from './Components/Contact/Contact'
import Mobile from './Components/Portfolio/Portfolio'
import Notfound from './Components/Notfound/Notfound'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

export default function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: 'home', index: true, element: <Home /> },
        {path: 'about',  element: <About />},
        { path: "*", element: <Notfound /> },
        { path: 'Portfolio', element:<Portfolio/> },
        { path: 'Contact', element:<Contact/> }
      ]
    }

  ])
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
