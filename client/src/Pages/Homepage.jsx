import {Checkbox, Center, Container,FormControl,FormLabel,FormErrorMessage, FormHelperText,Input,Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../Components/Header";



const Homepage = () => {
  const [userData,setuserData]=useState({
      email:"",
      password:"",
      name:""
  })

  const toast=useToast()
  const navigate=useNavigate()

  const handleLogin=async()=>{
 
    try{
      const sendData=await fetch("https://taskplannerbyfarman.onrender.com/user/login",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(userData)
      })
      const resp=await sendData.json();
      if(resp?.token?.length>10){
          localStorage.setItem("TOKEN",resp.token)
          toast({
              title: 'Login Success',
           
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
            navigate("/dashboard")
      
         
      }else{
          toast({
              title: 'Login Failed',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
       
      }
      
    }catch(err){
      toast({
          title: 'Login Failed',
       
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
  
    }
  }

  const handleRegister=async()=>{
    try{
      const sendData=await fetch("https://taskplannerbyfarman.onrender.com/user/signup",{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(userData)
      })
      const resp=await sendData.json();
     
      toast({
          title: 'SignUp Successfull',
       
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
    }catch(err){
      toast({
          title: 'Signup Failed',
       
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    
    }

  }

  useEffect(()=>{
    if(localStorage.getItem("TOKEN")){
    navigate("/dashboard")
    }
  },[])
  return (
    <Container m="0px" p="0px" bgColor={"white"} minW="100%" minH={"800px"}>
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
          <Input type="email" value={userData.email} placeholder="demo@gmail.com" onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
          <FormLabel>Password</FormLabel>
          <Input type="Password" value={userData.password} placeholder="password" onChange={(e)=>{setuserData({...userData,password:e.target.value})}} />
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