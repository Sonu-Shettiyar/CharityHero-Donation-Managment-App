import React, { useState } from 'react';

import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

const Charity = () => {
  // const [progress, setProgress] = useState(33.33);
  const [name ,setName] = useState("");
  const [location,setLocation] = useState("");
  const [category ,setCategory] = useState("");
  const [title,setTitle] = useState("");
  const [raise_money , setRaiseMoney] = useState("");
  const [description,setAbout] = useState("");
  const [show, setShow] = React.useState(false);
  // const handleClick = () => setShow(!show);

  const handleSave = () =>{
    const details =  {name , location ,category,title,raise_money,description};
   
    fetch('https://gifted-mittens-fly.cyclic.app/request/add', {
     method: 'POST',
     body: JSON.stringify(details),
     headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5173', // Set the appropriate allowed origin here
    }
   }).then(res=>res.json())
   .then(res => {
     if(res.status==200){
       alert("Post is requested")
       // navigate(location.state)
       console.log(res);
     }else{
       alert(res.error)
     }
   })
   .catch(err=> alert(err))


    }



  return (
    <>
       <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
      FundRaiser Details
      </Heading>
    <div style={{width:"70%",height:"300px" , margin:"auto",background:"#c5806a" ,display:"flex" , justifyContent:"space-evenly" ,padding:"20px" , borderRadius:"20px",fontSize:"large",fontWeight:"bolde"}}>
      <div style={{padding:"20px"}}>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Fundraiser Name
          </FormLabel>
          <Input id="first-name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
        </FormControl>
      </Flex>
   
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
         Location
        </FormLabel>
        <Input id="email" type="text"  placeholder='location' onChange={(e)=>setLocation(e.target.value)}/>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Category
        </FormLabel>
        <Input id="email" type="text" placeholder={"Category"}  onChange={(e)=>setCategory(e.target.value)} />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      {/* <SimpleGrid columns={1} spacing={6}> */}
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Title
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="text"
              placeholder="Title"
              focusBorderColor="brand.400"
              rounded="md"  onChange={(e)=>setTitle(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        </div>
        <div style={{padding:"20px"}}>
        <FormControl mt="2%">
        <FormLabel htmlFor="raise" fontWeight={'normal'}>
          Raise_money
        </FormLabel>
        <Input id="money" type="number" placeholder='Money needed'  />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl mt="2%">
        <FormLabel htmlFor="raise" fontWeight={'normal'}>
         Upload Pictures
        </FormLabel>
        <Input id="money" type="file" placeholder='Money needed' onChange={(e)=>setRaiseMoney(e.target.value)} />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="Write brief reason and cause of fundraising"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}

            onChange={(e)=>setAbout(e.target.value)}
          />
          <FormHelperText>
            Brief description for your cause.
          </FormHelperText>
        </FormControl> 
        <button style={{padding:"8px 20px" ,borderRadius:"10px"}} onClick={handleSave}>Submit </button>
        </div>
      {/* </SimpleGrid> */}
   
    </div>
    </>
  )
}

export default Charity