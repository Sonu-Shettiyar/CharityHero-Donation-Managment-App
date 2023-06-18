import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    // const token = req.headers.authorization?.split(" ")[1]
  const token = localStorage.getItem("ch-token");
//   if (token) {
//   return children
// }

  const location = useLocation();
  return token ? children : <Navigate to={"/login"} state={location.pathname} replace/>
}

export default PrivateRoute;




// --------login ---
// token --- token---response---response ko send krna podega orivate riute or check krna pdega

// --auth Context Api--
