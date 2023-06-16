import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signUp' element={<SignUp/>}></Route>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes