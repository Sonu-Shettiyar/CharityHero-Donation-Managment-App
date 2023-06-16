import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import logo from "../images/charityhero_logo.jpg"
const AdminNavbar = () => {
  // position={["sticky"]} top={0} zIndex={9999}
  return (
    <Box position={["sticky"]} bgColor={"white"} top={0} zIndex={9999}>

      <div style={{
          display: 'flex',
          alignContent: "center",
      paddingLeft: "11px",
      // backgroundColor: "rgba(107, 203, 241, 0.498);",
      // background:"#653719b1",
      background:"#8F6F5A",
      color: "#ffffffe7",
      alignItems: "center",
      justifyContent: "space-between",
      
      
    }}> 
      <div style={{
        paddingLeft:"3.5%"
      }}>
<img src={logo} style={{
        borderRadius:"100px"
      }} width={"150px"} alt="Charity-Hero" />
      </div>
      <div>
      <h1>Admin Panel</h1>
      </div>    

      <div></div>
      </div>
    </Box>
      
  )
}

export default AdminNavbar