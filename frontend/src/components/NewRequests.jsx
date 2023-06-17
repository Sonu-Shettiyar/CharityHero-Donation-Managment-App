import { Box, Center, Grid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RequestPostCards from './RequestPostCards'

const NewRequests = () => {
  const [posts, setPosts] = useState([])
  const getAllData = () => {
    fetch("https://gifted-mittens-fly.cyclic.app/posts/")
      .then((req) => req.json())
      .then((res) => {
        setPosts(res)
        
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getAllData()
  }, [])
  return (
    <>
      <Box pl={25}><Text fontSize={"22px"} fontWeight={600}> New Request's </Text></Box>
      <hr />
      <Center p={"1% 2% 0 2%"}>
        <Grid templateColumns='repeat(3, 250px)' gap={100} >
          {posts?.map((el, ind) => {
            return <RequestPostCards {...el} key={ind} />
          })}
        </Grid>
      </Center></>
  )
}

export default NewRequests