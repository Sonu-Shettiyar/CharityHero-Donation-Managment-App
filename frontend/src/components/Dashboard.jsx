import { Box, Center, Divider, Flex, Grid, Heading, TagLabel, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Card, Space } from 'antd';
import RequestPostCards from './RequestPostCards'
import RequestedPost from './RequestedPost'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'
const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const [neededAmount, setNeededAmount] = useState(0);
  const [raisedAmount, setRaisedAmount] = useState(0);
  const random = (Math.floor(Math.random() * 10000) + 1000);
  const getAllData = () => {
    fetch("https://gifted-mittens-fly.cyclic.app/posts/")
      .then((req) => req.json())
      .then((res) => {
        console.log(res)
        setPosts(res)
        let total = 0;
        let acc = 0;
        res.map((el, id) => {
          acc += Number(el.raise_money.split("").filter((el)=>el!=",").join(""))
          const filtered = el.want_money.split("").filter((el)=>el!=",").join("")
          total += Number(filtered);

        })
        setRaisedAmount(acc)
        setNeededAmount(total)

      })
    .catch((err)=>console.log(err))
  }
  useEffect(() => {
    getAllData()
    setRaisedAmount((prev)=>prev+random)
  },[random])
  return (
    <>

      <Box pl={25}><Text fontSize={"22px"} fontWeight={600}> Statistics</Text></Box>
      <hr />
      <Flex justify={"space-around"} >
        <Box>

          <Stat>
            <StatLabel fontWeight={600} textAlign={"center"} >Incoming Credit's</StatLabel>
            < hr style={{ border: "1px dashed green" }} />
            <StatNumber textAlign={"end"} fontSize={"20px"} fontWeight={600} pb={5}>₹{  random}</StatNumber>
            <StatHelpText>
              <StatArrow color={"lightgreen"} type='increase' mr={"2px"} />
              +{"   "}23.36%
            </StatHelpText>
          </Stat>
        </Box>
        <Box>

          <Stat>
            <StatLabel fontWeight={600} textAlign={"center"} >Current Balance</StatLabel>
            < hr style={{ border: "1px dashed red" }} />

            <StatNumber textAlign={"end"} fontSize={"28px"} pt={5} fontWeight={600} textShadow="rgba(38, 40, 39, 0.359) 1px 1px">₹{raisedAmount }</StatNumber>
            <StatHelpText>

            </StatHelpText>
          </Stat>
        </Box>

      </Flex>


      <Flex p={20} justifyContent={"space-around"}>
        <Space>

          <Card size="small" title="Initiative Details" style={{ width: 300, border: "1px solid grey" }}>
            <Box pl={20} >

              <Text>
                Initiative in progress : {10}

              </Text>
              <Text>
                Initiative Closed : {41}

              </Text>
              <Text>

                Total : 51
              </Text>
            </Box>

          </Card>
        </Space>
        <Space>

          <Card size="small" title="Amount Details" style={{ width: 300, background: "#c68a0988", border: "1px solid grey" }}>
            <Box pl={20}>
              <Text>
                Amount Needed : ₹{neededAmount-random}

              </Text>

              <Text>
                Amount Raised : ₹{raisedAmount}


              </Text>
              <Text>

                Total Estimation: ₹{neededAmount+raisedAmount}
              </Text>
            </Box>

          </Card>
        </Space>
      </Flex>


      <hr />
      <Box pl={25}><Text fontSize={"22px"} fontWeight={600}>Pending Request's </Text></Box>
      <hr />
      <Center w={"100%"} >

        <Grid templateColumns='repeat(3, 250px)' gap={100} >
          {posts?.map((el, ind) => {
            return <RequestPostCards key={ind} />
          })}
        </Grid>
      </Center>
      <Text textAlign={"right"}><RequestedPost /></Text>




    </>
  )
}

export default Dashboard