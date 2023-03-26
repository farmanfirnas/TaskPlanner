import React from "react";
import {Container,Stack} from "@chakra-ui/react"
import { HeaderDashbaord } from "../Components/Header.dashbaord";
import { LeftBar } from "../Components/LeftBar";
import { Sprint } from "../Components/Dashboard/SprintPage";
import { AddTask } from "../Components/Dashboard/AddTask";
import { Route, Routes } from "react-router-dom";

export const Dashboard=()=>{
    return(
        <Container  minW="100vw" maxW="100vw" overflow="hidden"  p="0px">
       
         <Stack direction="row"   minW="100%" maxW="100%" overflow="hidden">
         <LeftBar/>
       {
        <Routes>
            <Route path="/" element={<AddTask/>}/>
            <Route path="/sprint" element={<Sprint/>}/>
        </Routes>
       }
         </Stack>
        </Container>
    )
}