import React from 'react'

const AdminNavbar = () => {

  return (
      <div style={{
          display: 'flex',
          justifyContent: "space-between",
          alignContent: "center",
          border:"1px solid red"
      }}> 
          <img src="./charityhero_logo.png" alt="CharityHero" />
          <h1>Admin Panel</h1>
          <div></div>
    </div>
  )
}

export default AdminNavbar