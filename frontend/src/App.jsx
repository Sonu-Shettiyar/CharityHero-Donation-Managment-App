import { useState } from 'react'
import AdminNavbar from './components/AdminNavbar'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainRoutes from './components/MainRoutes'



function App() {

  return (

   <div>

      <Navbar/>
      <MainRoutes/>
      <Footer/>
</div> )
}

export default App
