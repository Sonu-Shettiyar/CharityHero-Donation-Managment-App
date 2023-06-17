import { Button, Center, Td, Tr } from '@chakra-ui/react'
import React from 'react'
import "../components/UserTable.css"
import { MdOutlineRemoveCircleOutline  } from "react-icons/md"

const UserRow = ({email,_id,mobile,name}) => {
  return (
    <Tr>
      <Td>{ _id}</Td>
      <Td>{name?name:email }</Td>
      <Td isNumeric>{ mobile?mobile:"Private Number"}</Td>
      <Td>{ email}</Td>
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