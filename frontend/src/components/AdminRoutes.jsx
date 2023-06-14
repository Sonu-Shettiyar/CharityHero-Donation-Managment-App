import React from 'react'
import RequestedPost from './RequestedPost'

const AdminRoutes = () => {
  return (
      <div>
          <Routes>
          <Route path="/posts/show-requested" element={<RequestedPost/>}></Route>
          <Route path="/posts/show-all" element={<RequestPost/>}></Route>
          <Route path="/posts/raise-charity" element={<RequestPost/>}></Route>
</Routes>
      </div>
  )
}

export default AdminRoutes