import { Box, Center, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import RequestPostCards from './RequestPostCards'

const NewRequests = () => {
  return (
      <>
      <Box pl={25}><Text fontSize={"22px"} fontWeight={600}> New Request's </Text></Box>
                  <hr />
                  <Center p={"1% 2% 0 2%"}>
                    <Grid templateColumns='repeat(3, 250px)' gap={100} >
                      {[1, 2, 3, 3, 4, 5, 6, 5, 5, 45, 5, 5, 5, , 5, 5, 5, 5, 5, 5, 5, 4, 5,].map((el, ind) => {
                        return <RequestPostCards key={ind} />
                      })}
                    </Grid>
                  </Center></>
  )
}

export default NewRequests