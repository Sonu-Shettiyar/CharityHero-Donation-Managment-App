import headerimage from "../images/headerimage.png";
//import {SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  HStack,
  Image,
  Input,
  
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import ExplorCampainKart from "../components/ExplorCampainKart";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios"
export const ExplorCampain = () => {

let [data,setdata]=useState([])

let getdata=()=>{

    axios.get("https://gifted-mittens-fly.cyclic.app/posts/")
    .then((res)=>setdata(res.data))
    .catch((error)=>console.log(error))


  

}

useEffect(()=>{
  getdata()
},[])


  return (
    <Box>
      <Image
        src={headerimage}
        // w={{ base: "100%", lg: "100%" }}
        w={"100%"}
        alt="Dan Abramov"
      />
      <Box display={"flex"} gap={20} justifyContent={"center"}>
        <Box>
          <Input
            isInvalid
            focusBorderColor="#ef7616"
            placeholder="Here is a sample placeholder"
            p={10}
            width={"700px"}
          />
         
        </Box>
        
     
        <HStack spacing='24px'>
        <Select placeholder="Select option" size='md'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select> 
          <Select placeholder="Select option" size='lg'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

        </HStack>
          
        
      </Box>

      <SimpleGrid columns={3} spacing={20} w={"80%"} m={"auto"}  mt={20}>
        {
          data.map((el)=><ExplorCampainKart key={el._id} {...el} />)
        }
        
      </SimpleGrid>
      <Footer />
    </Box>
  );
};
