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

import { useToast } from '@chakra-ui/react';

const Form1 = () => {
  const [progress, setProgress] = useState(33.33);
  const [name ,setName] = useState("");
  const [location,setLocation] = useState("");
  const [category ,setCategory] = useState("");
  const [title,setTitle] = useState("");
  const [raise_money , setRaiseMoney] = useState("");
  const [description,setAbout] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
   
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

    </>
  );
};


const Form3 = () => {
  const [progress, setProgress] = useState(33.33);
  const [name ,setName] = useState("");
  const [location,setLocation] = useState("");
  const [category ,setCategory] = useState("");
  const [title,setTitle] = useState("");
  const [raise_money , setRaiseMoney] = useState("");
  const [description,setAbout] = useState("");
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Concern of FundRaising
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
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
        
      </SimpleGrid>
    </>
  );
};

const RaiseCharity =() => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
   const [name ,setName] = useState("");
   const [location,setLocation] = useState("");
   const [category ,setCategory] = useState("");
   const [title,setTitle] = useState("");
   const [raise_money , setRaiseMoney] = useState("");
   const [description,setAbout] = useState("");


 const handleSave = () =>{
 const details =  {name , location ,category,title,raise_money,description};

 fetch('https://gifted-mittens-fly.cyclic.app/requests/add', {
  method: 'post',
  body: JSON.stringify(details),
  headers: {'Content-Type': 'application/json'}
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
      <Box
      marginTop="70px"
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={handleSave}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default RaiseCharity;



// import React from 'react'

// const RaiseCharity = () => {
//   return (
//     <div>
//       <div>
//         <form action="">
//           <input type="text" placeholder='write the Cause'/>
//           <input type="number"  placeholder='Amount to be raised'/>
//         </form>
//       </div>
//     </div>
//   )
// }

