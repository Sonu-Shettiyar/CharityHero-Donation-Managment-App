import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,
    Box,
    Center,
    Spinner
} from '@chakra-ui/react';
import "./UserTable.css";


import React, { useEffect, useState } from 'react'
import UserRow from './UserRow'

const UserList = () => {
    const [users, setUsers] = useState([])
    const getAllUsers = () => {
        fetch("https://gifted-mittens-fly.cyclic.app/users/all-users")
            .then((req) => req.json())
            .then((res) => {
                setUsers(res.users)
            })
            .catch((err) => console.log(err, "error"))
    }
    useEffect(() => {
        getAllUsers();
    }, [])
    if (users.length == 0) {
        return (
            <Center p={"40vh"}>
                 <Spinner
  thickness='20px'
  speed='0.55s'
  emptyColor='#a97112a2'
  color='pink'
  size='xl'
                /><Text p={"1%"} >
                    Loading. . . .
</Text>
           </Center>
        )
    }
    return (
        <>
            <Box pl={25}><Text fontSize={"22px"} fontWeight={600}> User Detail's </Text></Box>
            <hr />
            <Box p={"1% 2% 0 2%"}>
                <TableContainer >
                    <Table colorScheme='teal' >
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead bg={"#653719b1"}>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Name</Th>
                                <Th isNumeric>Mobile</Th>
                                <Th>Email</Th>
                                <Th></Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users?.map((el, ind) => {
                                    console.log(el,"user")
                                    return <UserRow {...el} key={ind} />
                                })
                            }
                        </Tbody>

                    </Table>
                </TableContainer>
            </Box>
        </>

    )
}

export default UserList


