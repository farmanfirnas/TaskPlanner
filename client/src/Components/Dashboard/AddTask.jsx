import React, { useEffect, useState } from "react";
import {Checkbox,Text, Center,Container,FormControl,FormLabel,FormErrorMessage, Select,FormHelperText,Input,Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack, VStack, useToast, Heading, Toast } from "@chakra-ui/react";
import {IoMdAdd} from "react-icons/io"
export const AddTask=()=>{
    const[taskData,setTask]=useState({
        task:"",
        assign:[],
        sprint:"",
        tags:""
    })
    let toast=useToast()
  
    const[alluser,setuser]=useState([])
    const[allsprint,setsprint]=useState([])
    const getAlluser=async()=>{
        const data=await fetch("https://taskplannerbyfarman.onrender.com/user/all");
        const resp=await data.json()
        setuser(()=>resp.allUser)
    }
    const getAllSprint=async()=>{
        const data=await fetch("https://taskplannerbyfarman.onrender.com/sprint/all");
        const resp=await data.json()
        setsprint(()=>resp)
    }
    const handleTask=async()=>{
        const data=await fetch("https://taskplannerbyfarman.onrender.com/task/create",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(taskData)
        });

        if(data.status==200){
            toast({
                description:"Task Added Successfully"
            })
        }
    }
    const addAssign=(data)=>{
            setTask((pre)=>{return {...taskData,assign:[...taskData.assign,data]}})
    }
    const newSprint=async()=>{
        const data=await fetch("https://taskplannerbyfarman.onrender.com/sprint/create",{
            method:"POST",
            
        });
        getAllSprint()
        toast({
            description:"New Sprint Created"
        })
    }
    useEffect(()=>{
        getAlluser()
        getAllSprint()
    },[])
    return(
       <Container minW={"800px"} p="20px">
       <FormControl maxW={{base:"350px",md:"400px"}} ml={{base:"0px",md:"200px"}} m="" p="20px" bgColor={"rgb(235,236,240)"}>
       <Heading textAlign={"center"}>ADD TASK</Heading>
       <FormLabel >Task</FormLabel>
         <Input bgColor={"white"} type="text" value={taskData.task} onChange={(e)=>{setTask((prev)=>{return {...taskData,task:e.target.value}})}}/>
         <FormLabel>Assign</FormLabel>
            <VStack minW="100%"  minH="100px" maxH={"100px"} overflowY="scroll"  scrollBehavior={"smooth"}>
              {
                    alluser?.map((e)=>{
                    
                        return <HStack minW="100%" justifyContent={"space-between"} borderRadius="10px" p="2px" pl="5px" pr="5px" bgColor={"white"}><Text>{e.name}</Text> <Button minH={"90%"}  onClick={(el)=>{addAssign(e._id) 
                            el.target.innerText="Assigned"
                            el.target.disabled="true"
                        }}>Assign</Button></HStack>
                    })
              }
               
                </VStack>
                <FormLabel>Select Sprint</FormLabel>
            <Select bgColor={"white"} value={taskData.sprint} onChange={(e)=>{setTask((prev)=>{return {...taskData,sprint:e.target.value}})}}>
          {
            allsprint?.map((e)=>{
                return <option value={e._id}>{"Sprint "+ e.sprint}</option>
            })
          }
            </Select>
                <FormLabel>Tags</FormLabel>

                <Input bgColor={"white"} type="text" placeholder="Coding,bug" value={taskData.tags} onChange={(e)=>{setTask((prev)=>{return {...taskData,tags:e.target.value}})}} />
         
         
         <Button mt="30px" minW="100%" bgColor="rgb(64,50,148)" color="white" onClick={handleTask}>Create Task</Button>
         <Button rightIcon={<IoMdAdd/>} onClick={newSprint} style={{position:"fixed",bottom:"20px",right:"20px"}} color="white" bgColor="rgb(9,30,66)">Create New Sprint</Button>
       </FormControl>
       </Container>
    )
}