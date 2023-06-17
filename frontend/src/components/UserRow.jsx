import { Button, Center, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import "../components/UserTable.css"
import { MdOutlineRemoveCircleOutline  } from "react-icons/md"

const UserRow = () => {
  return (
    <Tr>
    <Td>inchesjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</Td>
    <Td>millimetres (mm)</Td>
    <Td isNumeric>25.4</Td>
      <Td>millimetres (mm)</Td>
      <Td>
        <Center>
        <Button leftIcon={<MdOutlineRemoveCircleOutline />} colorScheme='teal' variant='solid'>
    Remove
  </Button>
     </Center>

      </Td>
  </Tr>
  )
}

export default UserRow