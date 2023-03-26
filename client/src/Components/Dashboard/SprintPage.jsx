import { TableContainer, Container, Select, HStack, Button, Center, SimpleGrid, Heading ,Text} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {RxEyeOpen} from "react-icons/rx"
import { TaskInfo } from "./TaskInfo";
export const Sprint = () => {
    const[alltask,settask]=useState()
    const[allsprint,setsprint]=useState([])
    const getAlltask=async(sprintNo)=>{
        const data=await fetch(`https://taskplannerbyfarman.onrender.com/task/sprint/${sprintNo}`);
        const resp=await data.json()
    settask(()=>{return resp})
        
    }
    const [sprintNo,setno]=useState(undefined)
    const getAllSprint=async()=>{
        const data=await fetch("https://taskplannerbyfarman.onrender.com/sprint/all");
        const resp=await data.json()
        setsprint(()=>resp)
    }
    useEffect(()=>{
        if(sprintNo!=undefined){
            getAlltask(sprintNo)
        }
        getAllSprint()
    },[sprintNo])
    return (
        <Container p="20px" minW="800px" overflow="hidden">

            <HStack ml="300px">
                <Select onClick={(event)=>{setno(event.target.value)}} maxW="300px" variant='flushed' placeholder='Select Sprint' >
                   {
                    allsprint?.map((e)=>{
                        return <option value={e._id}>{"Sprint "+ e.sprint}</option>
                    })
                   }
                </Select>
          
            </HStack>
            <Heading pt="40px" ml="30px" fontSize="30px">
                Tasks
            </Heading>
            <SimpleGrid p="30px" columns="2" gap="20px">
             
                {
                    alltask?.map((e)=>{
                        return (
                            <HStack borderRadius="10px" minW="200px" justifyContent="space-between" bgColor="rgb(43,61,92)" p="10px"> 
                            <Text color="white">{e.task}</Text>
                            <TaskInfo data={e}/>
                        
                            </HStack>
                        )
                    })
                }
                                
             
         
            </SimpleGrid>
        </Container>
    )
}