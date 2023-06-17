import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  HStack,
} from "@chakra-ui/react";
const ExplorCampainKart = ({
  backers,
  category,
  days_Left,
  fd_name,
  fd_sort,
  image,
  raise_money,
  title,
  want_money,
}) => {
  return (
    <Box border={"1px solid red"} borderRadius={"10px"} boxShadow="xl" pb={10}>
      <Image
        src={image}
        alt="Green double couch with wooden legs"
        // borderRadius="lg"
        w={"100%"}
        m={"auto"}
        borderRadius={"10px"}
        zIndex={2}

      />
      <Box  bgColor={"green"} color={"white"} w={"30%"} borderRadius={5}  ml={5} pl={5}>Tax Benefit</Box>
      <Stack mt="6" spacing="3" pl={5}>
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <Text mt={-5} color={"#9d9d9d"}>
          {fd_name}
        </Text>
        <HStack spacing="24px" mt={-15}>
          <Heading as="h4" size="md" color="blue.600">
            &#x20b9; {raise_money}
          </Heading>
          <Text color={"#9d9d9d"}>raise out of &#x20b9; {want_money}</Text>
        </HStack>
      </Stack>

      <Box
        display={"flex"}
        justifyContent={"space-around"}
        w={"80%"}
        m={"auto"}
      >
        <Button colorScheme="facebook">Facebook</Button>
        <Button colorScheme='teal'>Donate</Button>
      </Box>
    </Box>
  );
};

export default ExplorCampainKart;
