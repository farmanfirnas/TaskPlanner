import { TableContainer, Container, Select, HStack, Button, Center, SimpleGrid, Heading ,Text} from "@chakra-ui/react";
import React from "react";
import {RxEyeOpen} from "react-icons/rx"
import { TaskInfo } from "./TaskInfo";
export const Sprint = () => {
    return (
        <Container p="20px" minW="800px" overflow="hidden">

            <HStack ml="300px">
                <Select maxW="300px" variant='flushed' placeholder='Select Sprint' >
                    <option>Sprint 1</option>
                    <option>Sprint 2</option>
                    <option>Sprint 3</option>
                </Select>
                <Button>Create New Sprint</Button>
            </HStack>
            <Heading pt="40px" ml="30px" fontSize="30px">
                Tasks
            </Heading>
            <SimpleGrid p="30px" columns="2" gap="20px">
                <HStack borderRadius="10px" minW="200px" justifyContent="space-between" bgColor="rgb(43,61,92)" p="10px"> 
                <Text color="white">Go to Gym</Text>
                <TaskInfo/>
              
                </HStack>
                <HStack borderRadius="10px" minW="200px" justifyContent="space-between" bgColor="rgb(43,61,92)" p="10px"> 
                <Text color="white">Go to Gym</Text>
                <Button bgColor="rgb(9,70,166)" color="white" rightIcon={<RxEyeOpen  color="white"/> }>View/Update</Button>
                </HStack>
                <HStack borderRadius="10px" minW="200px" justifyContent="space-between" bgColor="rgb(43,61,92)" p="10px"> 
                <Text color="white">Go to Gym</Text>
                <Button bgColor="rgb(9,70,166)" color="white" rightIcon={<RxEyeOpen  color="white"/> }>View/Update</Button>
                </HStack>
                <HStack borderRadius="10px" minW="200px" justifyContent="space-between" bgColor="rgb(43,61,92)" p="10px"> 
                <Text color="white">Go to Gym</Text>
                <Button bgColor="rgb(9,70,166)" color="white" rightIcon={<RxEyeOpen  color="white"/> }>View/Update</Button>
                </HStack>

                <HStack borderRadius="10px" minW="200px" justifyContent="space-between" bgColor="rgb(43,61,92)" p="10px"> 
                <Text color="white">Go to Gym</Text>
                <Button bgColor="rgb(9,70,166)" color="white" rightIcon={<RxEyeOpen  color="white"/> }>View/Update</Button>
                </HStack>
            </SimpleGrid>
        </Container>
    )
}