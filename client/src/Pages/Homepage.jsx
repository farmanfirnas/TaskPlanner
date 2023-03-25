import {Checkbox, Center, Container,FormControl,FormLabel,FormErrorMessage, FormHelperText,Input,Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";

import { Header } from "../Components/Header";



const Homepage = () => {
  const [userData,setuserData]=useState({
      email:"",
      password:"",
      name:""
  })
//   const auth=useSelector((state)=>state.state.auth);
  const toast=useToast()

//   const dispatch=useDispatch()
  const handleLogin=()=>{
    //   dispatch(loginUser(userData,toast))
  }

  const handleRegister=()=>{
    // dispatch(signupUser(userData,toast))

  }
// const navigate=useNavigate()
  useEffect(()=>{
    // if(auth){
    // navigate("/dashboard")
    // }
  },[])
  return (
    <Container bgColor={"white"} minW="100%" minH={"800px"}>
        <Header/>
    <Center minH="100%">
    <Tabs margin={"40px"} color="rgb(64,50,148)" minH={{md:"400px"}}  minW={{md:"400px"}} borderRadius="10px" maxW="400px" bgColor="rgb(223,225,229)" padding={"20px"}>
  <TabList>
   <HStack minW="100%" justifyContent={"center"}> <Tab>LOGIN</Tab>
    <Tab>REGISTER</Tab>
   </HStack>
  </TabList>

  <TabPanels>
    <TabPanel>
    <Center >
      <VStack>
      <FormControl gap={"20px"}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={userData.email} onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
          <FormLabel>Password</FormLabel>
          <Input type="Password" value={userData.password} onChange={(e)=>{setuserData({...userData,password:e.target.value})}} />
          <Checkbox mt="20px" defaultChecked>Remember me</Checkbox>
          <Button mt="30px" minW="100%" bgColor="rgb(64,50,148)" color="white" onClick={handleLogin}>LOGIN</Button>
          </FormControl>
      </VStack>

        
      
      </Center>
    </TabPanel>
    <TabPanel>
    <Center>
        <FormControl>
        <FormLabel>Name</FormLabel>
          <Input type="text" value={userData.name} onChange={(e)=>{setuserData({...userData,name:e.target.value})}}/>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={userData.email} onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
          <FormLabel>Password</FormLabel>
          <Input type="text" value={userData.password} onChange={(e)=>{setuserData({...userData,password:e.target.value})}} />
          
          
          <Button mt="30px" minW="100%" bgColor="rgb(64,50,148)" color="white"onClick={handleRegister}>REGISTER</Button>
        
        </FormControl>
      </Center>
    </TabPanel>
 
  </TabPanels>
</Tabs>
    </Center>
      
    </Container>
  );
};

export default Homepage