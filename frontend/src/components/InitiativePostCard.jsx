import React from 'react'

import {
  Card,
  CardBody,
  CardFooter,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  HStack,
  Badge,
  Flex,
  Center,
} from "@chakra-ui/react";
import axios from 'axios';
const InitiativePostCard = ({
  backers,
  category,
  days_Left,
  fd_name,
  fd_sort,
  image,
  raise_money,
  title,
  _id,
  want_money }) => {


  const handleApproval = () => {
    const payload = {
      backers,
      category,
      days_Left,
      fd_name,
      fd_sort,
      image,
      raise_money,
      title,
      _id,
      want_money
    }
    // /admin/add
    axios.post(`https://gifted-mittens-fly.cyclic.app/posts/admin/add`, payload)
      .then((res) => {
        alert("Succesfully Approved!")      
      }).catch((err) => {
        alert("Unable to approve please try after sometime.")
      })
      axios.delete(`https://gifted-mittens-fly.cyclic.app/request/admin/delete/${id}`)
      .catch((err) => alert(err.message))

  }
  return (
    <Box border={"2px solid #FFDCD1"} borderRadius={"10px"} boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px; pb={10}">
      <Image
        src={image}
        alt={title}
        w={"100%"}
        m={"auto"}
        borderRadius={"10px"}
        zIndex={2}

      />
      <Stack  >
        <Heading as="h5" textAlign={"center"}>
          {title?.slice(0, 32) + "...."}


        </Heading>
        <Flex justify={"space-around"} alignItems={"center"}>
          <Box
          >
            <Text mt={-30} fontSize={12} color={"#9d9d9d"}>
              {fd_name?.slice(0, 10) + "..."}
            </Text>
          </Box>
          <div></div>
          <div></div>

          <Box>
            <Text pl={2} pr={2} mt={-25} bgColor={"#1be93e94"} color={"white"} fontSize={"12PX"} textAlign={"center"} borderRadius={50}>
              {category?.toUpperCase()}
            </Text>
          </Box>


        </Flex>


        <Center mt={-25}>
                  <Text color={"#4a4545"} fontSize={"15px"}>contributed
                  <span style={{
            color: "green",
            fontWeight: 900,paddingRight:"5px"
          }}> &#x20b9;{want_money ? (want_money) : (Math.floor(Math.random() * 100) + 10000) / 2}</span>
                      
                      
                      
                      of  <span style={{
            color: "red",
            fontWeight: 900
          }}> &#x20b9;{want_money ? (want_money) : (Math.floor(Math.random() * 100) + 10000)}</span></Text>


        </Center>



      </Stack>

      <Box
        display={"flex"}
        justifyContent={"space-around"}
        w={"80%"}
        m={"auto"}
        mb={20}
      >
        <Button variant='solid' borderRadius={"100px"} w="100%" onClick={()=>handleApproval()} bg='#3dc151dd'>
          See More
        </Button>
       
      </Box>
    </Box>
  )
}



export default InitiativePostCard