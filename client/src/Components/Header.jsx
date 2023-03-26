import { Button, HStack, Image, Stack,Heading } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
export const Header=()=>{
    return (
        <Stack p="20px" direction={"row"} bgColor="rgb(9,30,66)" justifyContent="space-between" minW="100%" >
            <Heading color="white" fontSize="25px">TaskPlanner.</Heading>
            {/* <Image width={{base:"100px",md:"200px" }}src={logo}/>             */}
        <NavLink to={"/"}>   <Button height={{base:"40px",md:"40px"}} fontSize={{base:"17px",md:"19px"}} width="160px" bgColor="rgb(255,167,7)" color={"white"}>Sign In</Button></NavLink>
        </Stack>
    )
}