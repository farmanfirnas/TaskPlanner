import { Button, HStack, Image, Stack,Heading } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
export const Header=()=>{
    return (
        <Stack p="20px" direction={"row"}  justifyContent="space-between" minW="100%" >
            <Heading color="rgb(64,50,148)">Task - Planner</Heading>
            {/* <Image width={{base:"100px",md:"200px" }}src={logo}/>             */}
        <NavLink to={"/user"}>   <Button height={{base:"40px",md:"40px"}} fontSize={{base:"17px",md:"19px"}} width="160px" bgColor="rgb(229,9,20)" color={"white"}>Sign In</Button></NavLink>
        </Stack>
    )
}