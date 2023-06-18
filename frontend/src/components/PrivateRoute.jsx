import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const token = req.headers.authorization?.split(" ")[1]
  const location = useLocation();
  return token ? children : <Navigate to={"/login"} state={location.pathname} replace/>
}

export default PrivateRoute