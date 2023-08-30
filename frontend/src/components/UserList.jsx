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
    Spinner,
    Input
} from '@chakra-ui/react';
import "./UserTable.css";


import React, { useEffect, useRef, useState } from 'react'
import UserRow from './UserRow'
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([])
    const search = useRef()
    const getAllUsers = () => {
        fetch("https://gifted-mittens-fly.cyclic.app/users/all-users")
            .then((req) => req.json())
            .then((res) => {
                setUsers(res.users)
            })
            .catch((err) => console.log(err, "error"))
    }
    const deleteUserById = (id) => {
        axios.delete(`https://gifted-mittens-fly.cyclic.app/users/delete/${id}`)
            .then((res) => {
                alert("User successfully deleted")
                getAllUsers();
            })
            .catch((err) => {
                alert(err.message)
            })
    }
    const handleSearch = (e) => {
        clearTimeout(search.current)
        search.current = setTimeout(() => {
            fetch(`https://gifted-mittens-fly.cyclic.app/users/all-users?q=${e.target.value}`)
                .then((req) => req.json())
                .then((res) => {
                    setUsers(res.users)
                })
                .catch((err) => alert(err.message))
        }, 2000);
    }
    useEffect(() => {
        getAllUsers();
    }, [])
    // if (users.length == 0) {
    //     return (
    //         <Center p={"40vh"}>
    //             <Spinner
    //                 thickness='20px'
    //                 speed='0.55s'
    //                 emptyColor='gray'
    //                 color='pink'
    //                 size='xl'
    //             /><Text p={"1%"} >
    //                 Loading. . . .
    //             </Text>
    //         </Center>
    //     )
    // }
    return (
        <>
            <Box pl={25}><Text fontSize={"22px"} fontWeight={600}> User Detail's </Text></Box>
            <hr />
            <Center >
                <Input w={"50%"} pl={"2%"} placeholder='Search here...' onChange={(e) => handleSearch(e)} border={"none"} borderBlockEnd={"5px solid #acb1b052"} borderRadius={"100px"} h={"40px"} />
            </Center>

            <Box p={"1% 2% 0 2%"}>
                <TableContainer >
                    <Table colorScheme='teal' >
                        <TableCaption>@All Charity-Hero User</TableCaption>
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
                                    return <UserRow {...el} deleteUserById={deleteUserById} key={ind} />
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


