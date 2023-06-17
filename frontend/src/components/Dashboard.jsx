import { Box, Center, Divider, Flex, Grid, Heading, Spinner, TagLabel, Text } from '@chakra-ui/react'
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
  const [neededAmount, setNeededAmount] = useState(0);
  const [raisedAmount, setRaisedAmount] = useState(0);
  const [random, setRandom] = useState(0);

  const [posts, setPosts] = useState([])
  const getAllData = () => {
    fetch("https://gifted-mittens-fly.cyclic.app/posts/")
      .then((req) => req.json())
      .then((res) => {
        setPosts(res)
        let total = 0;
        let acc = 0;
        res.map((el, id) => {
          if (el.raise_money !== undefined) {
            acc += +el.raise_money
            console.log(acc)
            let ans = el.raise_money + ""
            const filtered = ans?.split("").filter((el) => el != ",").join("")
            total += Number(filtered);

          }

        })
        setRaisedAmount(acc)
        setNeededAmount(total)

      })
      .catch((err) => console.log(err))
  }

  const incomeGenrator = () => {
    setInterval(() => {
      setRandom(Math.floor(Math.random() * 100) + 1000);
    }, 4000);
  }


  useEffect(() => {
    getAllData()
    incomeGenrator();
  }, [])
  useEffect(() => {

    setRaisedAmount((prev) => prev + +random)
  }, [random])
  return (
    <>

      <Box pl={25}><Text fontSize={"22px"} fontWeight={600}> Statistics</Text></Box>
      <hr />
      <Flex justify={"space-around"} >
        <Box>

          <Stat>
            <StatLabel fontWeight={600} textAlign={"center"} >Incoming Credit's</StatLabel>
            < hr style={{ border: "1px dashed green" }} />
            <StatNumber textAlign={"end"} fontSize={"20px"} fontWeight={600} pb={5}>₹{random}</StatNumber>
            <StatHelpText>
              <StatArrow color={"lightgreen"} type='increase' mr={"2px"} />
              +{"   "}
              {
              (

                (Math.random().toFixed(2))

                )}%
              {/* 23.36% */}
            </StatHelpText>
          </Stat>
        </Box>
        <Box>

          <Stat>
            <StatLabel fontWeight={600} textAlign={"center"} >Current Balance</StatLabel>
            < hr style={{ border: "1px dashed red" }} />

            <StatNumber textAlign={"end"} fontSize={"28px"} pt={5} fontWeight={600} textShadow="rgba(38, 40, 39, 0.359) 1px 1px">₹{raisedAmount}</StatNumber>
            <StatHelpText>

              <StatArrow color={"red"} type='decrease' mr={"2px"} />
              -{"   "}{
                  (Math.random().toFixed(2)) +" Tax deduction"

              }
            </StatHelpText>
          </Stat>
        </Box>

      </Flex>


      <Flex p={20} justifyContent={"space-around"}>
        <Space>

          <Card size="small" title="Initiative Details" style={{ width: 300, border: "1px solid grey" }}>
            <Box pl={20} >

              <Text>
                Initiative in progress : {54}

              </Text>
              <Text>
                Initiative Closed : {+posts.length - 54}

              </Text>
              <Text>

                Total : {posts.length}
              </Text>
            </Box>

          </Card>
        </Space>
        <Space>

          <Card size="small" title="Amount Details" style={{ width: 300, background: "#c68a0988", border: "1px solid grey" }}>
            <Box pl={20}>
              <Text>
                Amount Needed : ₹{neededAmount - random}

              </Text>

              <Text>
                Amount Raised : ₹{raisedAmount}


              </Text>
              <Text>

                Total Estimation: ₹{neededAmount + raisedAmount}
              </Text>
            </Box>

          </Card>
        </Space>
      </Flex>

      <hr />
      <Box pl={25}><Text fontSize={"22px"} fontWeight={600}>Pending Request's </Text></Box>
      <hr />
      <Center w={"100%"} >
        {
          posts.length == 0 ? <Center>
            <Spinner
              thickness='20px'
              speed='0.65s'
              emptyColor='gray'
              color='pink'
              size='xl'
            />
            <Text>{"  "}Loading....</Text></Center> : (
            <Grid templateColumns='repeat(3, 250px)' gap={100} >

              {posts.length > 0 && (<><RequestPostCards {...posts[0]} />
                <RequestPostCards {...posts[1]} />
                <RequestPostCards {...posts[2]} />
              </>
              )}

            </Grid>
          )
        }

      </Center>
      <Text textAlign={"right"}><RequestedPost /></Text>




    </>
  )
}

export default Dashboard