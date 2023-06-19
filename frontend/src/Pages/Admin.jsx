import React, { useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Box, Flex, Grid, Text, Heading, Center } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Dashboard from '../components/Dashboard'
import RequestPostCards from '../components/RequestPostCards'
import NewRequests from '../components/NewRequests'
import UserList from '../components/UserList'
import AllInitiatives from '../components/AllInitiatives'
const Admin = () => {
// const [posts,setPosts] = useState([])
  
  return (
    <Box >

      <Grid   
        templateColumns='1fr'  mt={-8} w={"100%"} >
          <AdminNavbar />
        <Box  >
          <Box >
          <Tabs   >
              <Flex>

              <TabList  pt={"2%"} bg={"#FFDCD1"}>
                <Grid templateColumns=''  templateRows={"repeat(4,50px)"} gap={"20px"} >

                  <Box bg={"#000000"} w={["100px","250px","350px"]}>
                    <Tab bg={"none"} border={"none"} w={"100%"} color={"white"}>
                      <Text fontSize={"18px"}>
                        Dashboard
                      </Text>
                    </Tab>
                  </Box>
                  <Box bg={"#000000"}  w={["100px","250px","350px"]}>
                    <Tab bg={"none"} border={"none"} w={"100%"} color={"white"}>
                      <Text fontSize={"18px"}>
                        New Request's
                      </Text>
                    </Tab>
                    </Box>
                    <Box bg={"#000000"} w={["100px","250px","350px"]}>
                    <Tab bg={"none"} border={"none"} w={"100%"} color={"white"}>
                      <Text fontSize={"18px"}>
                      Users
                      </Text>
                    </Tab>
                    </Box>
                    <Box bg={"#000000"}  w={["100px","250px","350px"]}>
                    <Tab bg={"none"} border={"none"} w={"100%"} color={"white"}>
                      <Text fontSize={"18px"}>
                      Initiatives
 
                      </Text>
                    </Tab>
                  </Box>
                </Grid>
              </TabList>


              <TabPanels bg={"#EFEFEF"}>
                <TabPanel>
                  <Box>


                      <Dashboard  />
                  </Box>
                </TabPanel>
                <TabPanel>

                  <NewRequests />
                </TabPanel>
                <TabPanel>
                  <Box w={"100%"} >

                    <UserList  />
                  </Box>
                  </TabPanel>
                  
                  <TabPanel>
                  <Box w={"100%"} >

                    <AllInitiatives />
                  </Box>
                </TabPanel>
              </TabPanels>
            </Flex>
          </Tabs>

         </Box>
        </Box>
      </Grid>

    </Box>
  )
}

export default Admin