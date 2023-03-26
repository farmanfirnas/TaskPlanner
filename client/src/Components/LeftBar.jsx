import React, { useEffect, useState } from "react";
import { Button, Container, Stack,VStack } from "@chakra-ui/react";
import {RiDashboard2Line} from "react-icons/ri"
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import {BsBagPlus,BsBag, BsFillCalendarCheckFill} from "react-icons/bs"
import {MdAdd} from "react-icons/md"
import {CgMenuGridO} from "react-icons/cg"
import { NavLink, useNavigate } from "react-router-dom";
export const LeftBar=()=>{
  const navigate=useNavigate()
  const handlelogout=()=>{
    localStorage.removeItem("TOKEN")
    navigate("/")
  }

  useEffect(()=>{
      if(!localStorage.getItem("TOKEN")){
        navigate("/")

      }
  },[])

    return (
        <Stack style={{gap:"15px"}} bgColor="rgb(235,236,240)" direction={"column"} width="20%" maxW={"30%"} justifyContent="left" minH={"630px"}  justifyItems={"left"} textAlign={"left"}   p="50px" pt="50px" pb="100px"  >
        <Button m="auto"  justifyContent={"left"}  minW={"170px"} borderBottom="2px" borderBottomColor="rgb(37,56,88)"  color="white" hidden="true" leftIcon={<RiDashboard2Line/>}>Home</Button>
        <NavLink to="/dashboard/">   <Button m="auto"  justifyContent={"left"}  borderBottom="2px" borderBottomColor="rgb(37,56,88)" minW={"170px"} bgColor={""} color="rgb(37,56,88)" leftIcon={<RiDashboard2Line/>}>Dashboard</Button></NavLink>
             <NavLink to="/dashboard/sprint"> <Button m="auto" justifyContent={"left"}borderBottom="2px" borderBottomColor="rgb(37,56,88)" minW={"170px"} bgColor={""} color="rgb(37,56,88)"  leftIcon={<BsFillCalendarCheckFill />}>Sprint</Button></NavLink>
          
             
              <Button  maxW={"170px"} minW={"170px"} onClick={handlelogout}>Log Out</Button>
      </Stack>
    )
}