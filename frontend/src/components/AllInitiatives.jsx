import { Box, Center, Grid, Progress, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RequestPostCards from './RequestPostCards'
import InitiativePostCard from './InitiativePostCard'

const AllInitiatives = () => {
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
      <Box pl={25}><Text fontSize={"22px"} fontWeight={600}>Progressing Initiatives </Text></Box>
      <hr />
      <Center p={"1% 2% 0 2%"}>
              {
                  posts.length > 0?(<Grid templateColumns='repeat(3, 250px)' gap={100} >
                  {posts?.map((el, ind) => {
                    return <InitiativePostCard {...el} key={ind} />
                  })}
                  </Grid>) : (<>
                    <Spinner
  thickness='20px'
  speed='0.65s'
  emptyColor='pink'
  color='gray'
  size='xl'
/><Text p={1}>Loading...</Text>
                      </>)
        }
      </Center></>
  )
}

export default AllInitiatives