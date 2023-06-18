import { Box, Center, Grid, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RequestPostCards from './RequestPostCards'
import { useRef } from 'react'

const NewRequests = () => {
  const [posts, setPosts] = useState([])
  const search = useRef()
  const getAllData = () => {
    fetch("https://gifted-mittens-fly.cyclic.app/posts/")
      .then((req) => req.json())
      .then((res) => {
        setPosts(res)

      })
      .catch((err) => console.log(err))
  }

  const handleSearch = (e) => {
    clearTimeout(search.current)
    search.current = setTimeout(() => {
      fetch(`https://gifted-mittens-fly.cyclic.app/posts?q=${e.target.value}`)
        .then((req) => req.json())
        .then((res) => {setPosts(res)})
        .catch((err) => console.log(err))
    }, 2000);
  }
  useEffect(() => {
    getAllData()
  }, [])
  return (
    <>
      <Box pl={25}><Text fontSize={"22px"} fontWeight={600}> New Request's </Text>

      </Box>
      <hr />
      <Center >
        <Input w={"50%"} pl={"2%"} placeholder='Search here...' onChange={(e) => handleSearch(e)} border={"none"} borderBlockEnd={"5px solid #acb1b052"} borderRadius={"100px"} h={"40px"} />
      </Center>

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