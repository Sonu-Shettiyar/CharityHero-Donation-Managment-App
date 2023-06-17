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
    Center
} from '@chakra-ui/react';
import "./UserTable.css";


import React from 'react'
import UserRow from './UserRow'

const UserList = () => {
    return (
        <>
            <Box pl={25}><Text fontSize={"22px"} fontWeight={600}> User Detail's </Text></Box>
            <hr />
            <Box p={"1% 2% 0 2%"}>
            <TableContainer >
                <Table  colorScheme='teal' >
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
                            [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 11, 1, 1, 5].map((el,ind) => { return <UserRow  key={ind}/> })
                        }
                    </Tbody>

                </Table>
                </TableContainer>
                </Box>
        </>

    )
}

export default UserList


