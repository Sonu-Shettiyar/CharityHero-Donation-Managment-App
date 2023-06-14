import React from 'react'
import RequestedPost from './RequestedPost'

const AdminRoutes = () => {
  return (
      <div>
          <Routes>
          <Route path="/posts/show-requested" element={<RequestedPost/>}></Route>
          <Route path="/posts/show-all" element={<RequestedPost/>}></Route>
          <Route path="/posts/raise-charity" element={<RequestedPost/>}></Route>
</Routes>
      </div>
  )
}

export default AdminRoutes