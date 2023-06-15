import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Text, Heading, Image, Flex,Divider,Button,ButtonGroup, Box} from '@chakra-ui/react'

const RequestPostCards = () => {
  return (
    <Box>
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
  )
}

export default RequestPostCards