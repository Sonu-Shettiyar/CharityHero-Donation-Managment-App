import React from 'react'
import { Box, Button, Heading, Image,Text } from '@chakra-ui/react'
import logo from "../images/charityhero_logo.png"
import { Link, Navigate, useNavigate } from 'react-router-dom'
const AdminNavbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
navigate("/login")
  }
  return (
    <Box  position={["sticky"]}  left={"0px"} bgColor={"white"} top={0} zIndex={9999}
    p={{
      base: "10px",
      xl: "12px",
      sm: "5px",
      md:"7px"
  }}
    >

      <Box style={{
        display: 'flex',
        alignContent: "center",
        // paddingLeft: "11px",
        background: "#8F6F5A",
        color: "#ffffffe7",
        alignItems: "center",
        justifyContent: "space-between",
      }}
       
      >
        <Box style={{
          paddingLeft: "3.5%"
        }}
        p={{
          base: "10px",
          xl: "12px",
          sm: "5px",
          md:"7px"
      }}
        >
          <img src={logo} style={{
            borderRadius: "100px"
          }} width={"150px"} alt="Charity-Hero" />
        </Box>
        <Box>
          <Heading>Admin Panel</Heading>
        </Box>

        <Box pr={10}>
        {/* <Link textDecoration="none">Log Out</Link>
         */}
          <Button border={"none"} borderRadius={"100px"} p={2} onClick={()=>handleNavigate()} bg={"#c7875da0"}>Log Out</Button>
        </Box>      </Box>
    </Box>

  )
}

export default AdminNavbar