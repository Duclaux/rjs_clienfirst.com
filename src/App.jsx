import React from 'react'

// import des depandence pour le routage
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routes from '~react-pages' //import de vite.config
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const router = createBrowserRouter(routes) //creation du router contenant les routes

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App