import headerimage from "../images/headerimage.png";
import { useSearchParams } from "react-router-dom"
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
let [location,setlocation]=useState("")
let [category,setcategory]=useState("")
let [seachparam,setsearchparam]=useSearchParams()

let getdata=(params)=>{
 

    axios({
      method:"get",
      url:"https://gifted-mittens-fly.cyclic.app/posts/",
      params:params
    })
    .then((res)=>setdata(res.data))
    .catch((error)=>console.log(error))


  

}
console.log(seachparam)

useEffect(()=>{
 let params={location,category}
  console.log(params)
  setsearchparam(params)
  getdata(params)
},[location,category])


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
        <Select placeholder="Select Location" size='md' onChange={(el)=>setlocation(el.target.value)}>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Kolkata">Kolkata</option>
          </Select> 
          <Select placeholder="Select Category" size='lg' onChange={(el)=>setcategory(el.target.value)}>
            <option value="animal">Animal</option>
            <option value="children">Children</option>
            <option value="disability">Disability</option>
            <option value="education">Education</option>
            <option value="hunger">Hunger</option>
          </Select>

        </HStack>
          
        
      </Box>

      <SimpleGrid columns={3} spacing={20} w={"80%"} m={"auto"}  mt={20}>
        {
          data.map((el)=><ExplorCampainKart key={el._id} {...el} />)
        }
        
      </SimpleGrid>
     
    </Box>
  );
};
