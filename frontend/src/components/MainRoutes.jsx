
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'

import { ExplorCampain } from '../Pages/ExplorCampain'

import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import { Singleuserpage } from '../Pages/Singleuserpage'
import RaiseCharity from '../Pages/RaiseCharity'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>

            <Route path='/explorcampain' element={<ExplorCampain/>}></Route>
            <Route path="/user/:user_id" element={<Singleuserpage/>}/>

            <Route path='/signUp' element={<SignUp/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/raise-charity' element={<RaiseCharity/>}></Route>

        </Routes>
    </div>
  )
}

export default MainRoutes