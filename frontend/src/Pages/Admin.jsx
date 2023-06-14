import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Dashboard from '../components/Dashboard'
const Admin = () => {
  return (
    <div>

      <Grid templateColumns='1fr' h={"100vh"} mt={-8} w={"100%"} >
        <Box >
          <AdminNavbar />
          <Tabs >
            <Flex>
              <TabList h={'70vh'} pt={"2%"} bg={"#FFDCD1"}>
                <Grid templateColumns='1fr' templateRows={"repeat(3,50px)"} gap={"20px"} >

                  <Box bg={"#000000"} mb={"10px"} h={"100%"} w={"350px"}>
                    <Tab bg={"none"} border={"none"} w={"100%"} color={"white"}>
                      <Text fontSize={"18px"}>
                        Dashboard
                      </Text>
                    </Tab>
                  </Box>
                  <Box bg={"#000000"} mb={"10px"} h={"100%"} w={"350px"}>
                    <Tab bg={"none"} border={"none"} w={"100%"} color={"white"}>
                      <Text fontSize={"18px"}>
                        New Request's
                      </Text>
                    </Tab>
                  </Box><Box bg={"#000000"} mb={"10px"} h={"100%"} w={"350px"}>
                    <Tab bg={"none"} border={"none"} w={"100%"} color={"white"}>
                      <Text fontSize={"18px"}>
                        Users
                      </Text>
                    </Tab>
                  </Box>
                </Grid>
              </TabList>


              <TabPanels bg={"#EFEFEF"}>
                <TabPanel>
                  <Box border={"2px solid red"} p={"4% 2% 2% 4%"}>
                    <Dashboard />
                  </Box>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Flex>
          </Tabs>

        </Box>
      </Grid>

    </div>
  )
}

export default Admin