import { Box, Center, Grid, Heading, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RequestPostCards from './RequestPostCards'
import { useRef } from 'react'
import axios, { Axios } from "axios";

const NewRequests = () => {
  const [posts, setPosts] = useState([])
  const search = useRef()
  const getAllData = () => {
    axios.get("https://gifted-mittens-fly.cyclic.app/request/admin/get-request")
      .then((res) => {
        setPosts(res.data)
        // console.log(res, "request-response ")
      })
      .catch((err) => alert(err.message))
  }

  const handleSearch = (e) => {
    clearTimeout(search.current)
    search.current = setTimeout(() => {
      fetch(`https://gifted-mittens-fly.cyclic.app/posts?q=${e.target.value}`)
        .then((req) => req.json())
        .then((res) => { setPosts(res) })
        .catch((err) => console.log(err))
    }, 1000);
  }


  useEffect(() => {
    getAllData()
  }, [])

  if (posts.length === 0) {
    return <Center>
      <Heading>
        No Request's
      </Heading>
    </Center>
  }
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
            return <RequestPostCards props={el} key={ind} />
          })}
        </Grid>
      </Center></>
  )
}

export default NewRequests