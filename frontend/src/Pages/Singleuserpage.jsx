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
  FormControl,FormLabel,Select,Tabs,TabList,Tab,TabPanel,TabPanels,Img,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import axios from 'axios';
import { Space } from 'antd';

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
              w={'50%'}
              h={{ base: '50%', sm: '400px', lg: '450px' }}
            />
            <Space/>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                A Gesture of Compassion:
                <br /> Supporting the Neptune <br />
                Foundation in Providing Grocery Kits for the Elderly
              </Heading>
          
              <Flex>
              <CircularProgress value={40} color='green.400'>
                <CircularProgressLabel>1%</CircularProgressLabel>
              </CircularProgress>
             <p>
              18 Donors
             </p>
              </Flex>
           
<p>
Join us in the "Nourishing Lives" campaign to support the <br />
 Neptune Foundation's noble cause of caring for the elderly. <br />
  Together, we can ensure that our senior citizens live their lives <br />
   with dignity and enjoy the essential nourishment they need. <br />
   Your participation, donation, or volunteer efforts will make a <br />
   lasting impact and create a ripple effect of compassion in our <br />
   community. Let's come together and bring hope and <br />
   happiness to those who deserve it the most.
</p>
            </Box>
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            

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

          <br />
          <br />
          <Box>
          <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList textAlign={"center"}>
    <Tab>Project</Tab>
    <Tab>Products</Tab>
    <Tab>Updates</Tab>
    <Tab>Support</Tab>
  </TabList>
  <TabPanels>
    <TabPanel textAlign={'left'}>
    <Heading as='h6' size='s'  color={"red.500"}>
    Why Focus on the Elderly: 
  </Heading>
<p>
As society progresses, it is essential not to forget our elderly citizens, who 
have contributed so much throughout their lives. Many elderly individuals face financial hardships and
struggle to afford nutritious food. The Neptune Foundation is dedicated to bridging this gap and ensuring
that no elderly person goes hungry or feels neglected. By directing our efforts towards this cause, we can
that no elderly person goes hungry or feels neglected. By directing our efforts towards this cause, we can
</p>
<Img src='https://dkprodimages.gumlet.io/campaign/5317/atp2-01%20(10).jpg?format=webp&dpr=1.0&q=70&w=700'/>
<br />
<Heading as='h6' size='s' color={"teal.400"}>
Understanding the challenges faced by the elderly: 
  </Heading>
 
  <p>
  The elderly population faces a
  unique set of challenges as they age, such as diminishing physical and cognitive abilities, 
   limited mobility, and an increased reliance on others for daily tasks. In many cases,  
   financial constraints exacerbate their difficulties, leaving them struggling to meet their basic 
    needs, including access to nutritious food. By providing grocery kits and groceries, we can alleviate their burdens 
     and ensure they have access to essential sustenance.
  </p>

  <Img src='https://dkprodimages.gumlet.io/campaign/5317/atp6-01%20(4).jpg?format=webp&dpr=1.0&q=70&w=700'/>
  

     <Heading as='h6' size='s'color={"green.400"}>
     The role of the Neptune Foundation
  </Heading> 
  <p>The Neptune Foundation has been a pillar of support 
  for the elderly, striving to improve their quality of life. With their extensive experience 
  and dedicated team, they have developed programs that cater to the specific needs of the
   elderly population. By donating grocery kits and groceries, we can directly support their 
   efforts and contribute to the well-being of countless elderly individuals who may otherwise go 
   hungry or face nutritional deficiencies.</p>
   
        <Heading as='h6' size='s'color={"red.400"}>
        Promoting social interaction and emotional well-being:
  </Heading>    
  <p> Loneliness and isolation are significant concerns for many elderly individuals. Through 
  our contributions to the Neptune Foundation, we can help combat these challenges by fostering
  social interaction and emotional well-being. The distribution of grocery kits can serve as 
  an opportunity for volunteers to engage with the elderly, providing companionship, empathy,
   and a sense of belonging. These interactions can have a profound impact on their mental 
    health, instilling a renewed sense of purpose and joy in their lives.</p>
  <Heading as='h6' size='s'color={"red.400"}>
  Inspiring others to contribute:
  </Heading>    
  <p> When we extend our support to the Neptune Foundation, we set an example for others 
   to follow. Our actions can inspire a domino effect, encouraging more individuals 
   and 
   organizations to contribute to the cause of elderly care. By collectively 
   joininghands, we can create a significant and lasting impact on the lives of 
   our elderly population, allowing them to enjoy their golden years with dignity 
   and grace.</p>
   <Img src='https://dkprodimages.gumlet.io/campaign/5317/atp4-01%20(7).jpg?format=webp&dpr=1.0&q=70&w=700'/>
    </TabPanel>
    
    <TabPanel>
    <Heading as='h6' size='s'  color={"red.500"}>
    Find more information about Donation
  </Heading>
    </TabPanel>
    <TabPanel>
    <Heading as='h3' size='lg'  color={"blue.500"}>
    FAQs:-
  </Heading>
  <Box>
  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={"red.900"}>
        What is Donatekart ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Donatekart is India's one of a kind crowdfunding platform that allows donors to directly donate towards products that are required by the NGO. In the last 5 years, we have partnered with 1400+ NGOs all over India to raise 150+ crores worth of products. More than 5 lakh unique donors have used our platform to donate to charities of their choice. As a donor, you are guaranteed 100% transparency - after you donate 
    towards the products, you will receive an update from the campaigner.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        How to claim Tax-Exemption for my contributions on Donatekart?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You can also get a consolidated 80G receipt
     under 'My Donations' by selecting the year you require 
     the receipt for and clicking on 'Download'. You can then claim
      tax benefits while filing ITR in India with that certificate.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={"red.900"}>
        Why do we collect a tip amount ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Sometimes prices of the products change during the course of the campaign, we use
     these tips to cover the hike in prices and deliver the goods to NGOs.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={"red.900"}>
        Are these NGOs verified ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    All these NGOs are registered and are highly reputed in their areas of service. You can visit them and talk to them in person if you desire. Please write into us at info@donatekart.com 
    and we'll provide you with all their contact details.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={"red.900"}>
        How do I know these products have reached the right beneficiary ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    At Donatekart, we value 100% trust and transparency. It is mandatory for NGOs to send updates to donors,once the campaign is completed. We request you to wait for a few days so that we can deliver the products to our NGO partners and they can distribute them to the needy.Within a month,you would see update(s) in the form of pictures or 
    videos from the NGO in the 'Updates Tab' of the campaign you donated to
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' color={"red.900"}>
        How to Donate ?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Choose a campaign on Donatekart close to your heart. Add products to cart and proceed to payment. Select your "currency" and complete the transaction.We have a secured payment gateway
     that allows you to pay through a wide range of secure payment options.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  </Box>
    </TabPanel>
    <TabPanel>
    <Heading as='h6' size='s'  color={"green.500"}>
    Find more information about Donation
  </Heading>
    </TabPanel>
  </TabPanels>
</Tabs>
          </Box>
          <Box>
          <Tabs variant='soft-rounded' colorScheme="red" padding={"10px"}>
  <TabList color={"green"}>
    <Tab color={"red"}>Recent</Tab>
    <Tab>Most Generous</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  )
}
