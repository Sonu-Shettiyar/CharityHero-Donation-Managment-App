import React from 'react'
// import { Card, CardHeader, CardBody, CardFooter, Stack, Text, Heading, Image, Flex,Divider,Button,ButtonGroup, Box} from '@chakra-ui/react'
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
const RequestPostCards = ({
  backers,
  category,
  days_Left,
  fd_name,
  fd_sort,
  image,
  raise_money,
  title,
  want_money,
}) => {
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
          <Text color={"#4a4545"} fontSize={"15px"}>Contribution Goal <span style={{
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
        <Button variant='solid' w="50%" bg='#3dc151dd'>
          Approve
        </Button>
        <Button variant='solid' w="50%" bgColor='#c13d3ddd'>
          Reject
        </Button>
      </Box>
    </Box>
  )
}

export default RequestPostCards

{/* <Box>
      <Card>
        <CardBody>
          <Box >

       <Image
         src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
         alt='Green double couch with wooden legs'
         borderRadius='lg'
         w={"100%"} />
         </Box>
       <Stack >
         <Heading mb={-12} >Living room Sofa</Heading>
         <Text fontSize={"15px"} mb={-12}>
           This sofa is perfect for modern tropical spaces, baroque inspired
           spaces, earthy toned spaces and for people who love a chic design with a
           sprinkle of vintage design.
         </Text>
         <Flex justify={"space-between"} mb={-12}>
         <Text color='blue.600'>         
                          Contribution goal
       </Text>
      <Text color='blue.400'>
           $450
         </Text>
         </Flex>
       </Stack>
     </CardBody>
     <Divider />
     <CardFooter>
       <ButtonGroup w="100%" >
         <Button variant='solid' w="50%" bg='#3dc151dd'>
           Approve
         </Button>
         <Button variant='solid' w="50%" bgColor='#c13d3ddd'>
           Reject
         </Button>
       </ButtonGroup>
     </CardFooter>
   </Card></Box>
  ) */}