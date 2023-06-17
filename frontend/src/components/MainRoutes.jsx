
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import { ExplorCampain } from '../Pages/ExplorCampain'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/explorcampain' element={<ExplorCampain/>}></Route>

        </Routes>
    </div>
  )
}

export default MainRoutes