import React from 'react'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import axios from 'axios';

const getData = (url) => {
  return fetch(url).then((res) => res.json())
}
export const Singleuserpage = () => {
  const { user_id } = useParams();
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [user, setUser] = useState([])
  // console.log(val)
  const fetchNAdUpdateData = () => {
    setLoading(true)
    getData(`https://reqres.in/api/users/${user_id}`).then((res) => {
      setUser(res)
      console.log(res)
    }).catch((err) => {
      console.log(err)
      setErr(true)
    }).finally(() => setLoading(false))
  }
  useEffect(() => {
    fetchNAdUpdateData()
  }, [])

  if (loading) {
    return <h1>Loading ...</h1>
  }
  return (
    <div>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                user?.data?.avatar
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '800px', lg: '900px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                A Gesture of Compassion:
                <br /> Supporting the Neptune <br />
                Foundation in Providing Grocery Kits for the Elderly
              </Heading>
              <Box bgColor={"green"} color={"white"} w={"30%"} borderRadius={5} ml={5} pl={5}>Tax Benefit</Box>
              <Box bgColor={"blue"} color={"white"} w={"30%"} borderRadius={5} ml={5} pl={5}>Elderly</Box>
              <CircularProgress value={40} color='green.400'>
                <CircularProgressLabel>1%</CircularProgressLabel>
              </CircularProgress>

            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                </SimpleGrid>
              </Box>
              <Box>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  )
}
