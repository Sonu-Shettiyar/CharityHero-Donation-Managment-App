import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Grid,
  Flex,
  Center,
  Box
} from '@chakra-ui/react'
import RequestPostCards from './RequestPostCards'
function RequestedPost() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = () => {
    onOpen()
  }
  return (
    <>

      <Button
        onClick={() => handleClick()}

        m={4}
      >{`Show All`}</Button>


      <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bgColor={"white"}>
          <Flex justify={"space-between"}>
            <div></div>
            <Box
              fontWeight={900} fontSize={28} borderBottom="2px solid red" pb="0.5%" pt={"0.8%"} mb={"10px"}
            >
              <DrawerHeader>{`Pending Request list`}</DrawerHeader>

            </Box>          <DrawerCloseButton bg={"white"} mr={"1%"} />
          </Flex>
          <Center>

            <DrawerBody>


              <Grid templateColumns='repeat(4, 250px)' gap={100} >
                {[1, 2, 3, 3, 4, 5, 6, 5, 5, 45, 5, 5, 5, , 5, 5, 5, 5, 5, 5, 5, 4, 5,].map((el, ind) => {
                  return <RequestPostCards key={ind} />
                })}
              </Grid>


            </DrawerBody>
          </Center>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default RequestedPost