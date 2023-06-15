import { Box, Center, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import RequestPostCards from './RequestPostCards'
import RequestedPost from './RequestedPost'

const Dashboard = () => {

  return (
    <>
      <Text fontSize={"23px"}>
        Pending Request's
      </Text>
      <Center w={"100%"} borderBottom="2px solid green" >

        <Grid templateColumns='repeat(3, 250px)' gap={100} >
          {[1, 2, 3].map((el, ind) => {
            return <RequestPostCards key={ind} />
          })}
        </Grid>
      </Center>
      <Text textAlign={"right"}><RequestedPost/></Text>
    </>
  )
}

export default Dashboard