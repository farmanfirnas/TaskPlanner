import React from "react";
import {Container,Stack} from "@chakra-ui/react"
import { HeaderDashbaord } from "../Components/Header.dashbaord";
import { LeftBar } from "../Components/LeftBar";
import { Sprint } from "../Components/Dashboard/SprintPage";

export const Dashboard=()=>{
    return(
        <Container  minW="100vw" maxW="100vw" overflow="hidden"  p="0px">
            <HeaderDashbaord/>
         <Stack direction="row"   minW="100%" maxW="100%" overflow="hidden">
         <LeftBar/>
         <Sprint/>
         </Stack>
        </Container>
    )
}