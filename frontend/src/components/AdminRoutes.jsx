import React from 'react'
const AdminRoutes = () => {
  return (
      <div>
          <Routes>
          <Route path="/posts/show-requested" element={<RequestedPost/>}></Route>
          <Route path="/posts/show-all" element={<h1>sonu</h1>}></Route>
          <Route path="/posts/raise-charity" element={<RequestedPost/>}></Route>
</Routes>
      </div>
  )
}

export default AdminRoutes