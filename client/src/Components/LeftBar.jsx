import React from "react";
import { Button, Container, Stack,VStack } from "@chakra-ui/react";
import {RiDashboard2Line} from "react-icons/ri"
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import {BsBagPlus,BsBag, BsFillCalendarCheckFill} from "react-icons/bs"
import {MdAdd} from "react-icons/md"
import {CgMenuGridO} from "react-icons/cg"
import { NavLink } from "react-router-dom";
export const LeftBar=()=>{
    return (
        <Stack style={{gap:"15px"}} bgColor="rgb(235,236,240)" direction={"column"} width="20%" maxW={"30%"} justifyContent="left"   justifyItems={"left"} textAlign={"left"}   p="50px" pt="50px" pb="100px"  >
        <Button m="auto"  justifyContent={"left"}  minW={"170px"} borderBottom="2px" borderBottomColor="rgb(37,56,88)"  color="white" hidden="true" leftIcon={<RiDashboard2Line/>}>Home</Button>
        <NavLink to="/dashboard/">   <Button m="auto"  justifyContent={"left"}  borderBottom="2px" borderBottomColor="rgb(37,56,88)" minW={"170px"} bgColor={""} color="rgb(37,56,88)" leftIcon={<RiDashboard2Line/>}>Dashboard</Button></NavLink>
             <NavLink to="/dashboard/orders"> <Button m="auto" justifyContent={"left"}borderBottom="2px" borderBottomColor="rgb(37,56,88)" minW={"170px"} bgColor={""} color="rgb(37,56,88)"  leftIcon={<BsFillCalendarCheckFill />}>Sprint</Button></NavLink>
             <NavLink to="/dashboard/refund"> <Button m="auto" justifyContent={"left"} borderBottom="2px" borderBottomColor="rgb(37,56,88)" minW={"170px"} bgColor={""} color="rgb(37,56,88)"  leftIcon={<CgMenuGridO/>}>All Task</Button></NavLink>

             <NavLink to="/dashboard/users"> <Button m="auto" justifyContent={"left"}   minW={"170px"} borderBottom="2px" borderBottomColor="rgb(37,56,88)" bgColor={""} color="rgb(37,56,88)"  leftIcon={<AiOutlineUser/>}>Users</Button></NavLink>
           <NavLink to="/dashboard/cart">   <Button m="auto" justifyContent={"left"} minW={"170px"} borderBottom="2px" borderBottomColor="rgb(37,56,88)" bgColor={""} color="rgb(37,56,88)"  leftIcon={<BsBag/>}>Cart Item</Button></NavLink>
             
              <Button  maxW={"170px"} minW={"170px"}>Log Out</Button>
      </Stack>
    )
}