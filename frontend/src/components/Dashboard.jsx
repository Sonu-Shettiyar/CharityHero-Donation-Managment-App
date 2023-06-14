import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import RequestPostCards from './RequestPostCards'

const Dashboard = () => {
  return (
      <Box >
          
          {/* <Text>Dashboard</Text> */}
          <Grid templateColumns='repeat(3, 100px)' gap={20} templateRows={"repeat(3,200px)"}>
          {[1, 2, 3].map((el, ind) => {
              return <RequestPostCards key={ind}/>
              
          })}
          </Grid>
    </Box>
  )
}

export default Dashboard