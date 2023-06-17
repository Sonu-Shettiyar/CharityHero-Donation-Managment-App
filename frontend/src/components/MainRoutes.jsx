
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'

import { ExplorCampain } from '../Pages/ExplorCampain'

import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>

            <Route path='/explorcampain' element={<ExplorCampain/>}></Route>


            <Route path='/signUp' element={<SignUp/>}></Route>
            <Route path='/' element={<Home/>}></Route>

        </Routes>
    </div>
  )
}

export default MainRoutes