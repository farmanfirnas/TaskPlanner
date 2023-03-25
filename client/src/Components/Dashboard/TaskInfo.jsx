import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Heading,
    Container,
    Stack,
    HStack,
    Select,
    SimpleGrid
  } from "@chakra-ui/react";
  
  import React from "react";
  import { AiFillPlayCircle } from "react-icons/ai";
  import { BsFillInfoCircleFill } from "react-icons/bs";
  import {RxEyeOpen} from "react-icons/rx"
  export const TaskInfo = ({ data={}}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
      <Button bgColor="rgb(9,70,166)" onClick={onOpen} cursor={"pointer"} color="white" rightIcon={<RxEyeOpen  color="white"/> }>View/Update</Button>

  
        <Modal
          colorScheme={"white"}
          minW="600px"
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent minW={{base:"80%",md:"600px"}} maxW={{base:"80%",md:"600px"}}>
            <ModalHeader
            
             
            ></ModalHeader>
            <ModalCloseButton color={"rgb(43,61,92)"} />
            <ModalBody bgColor={"white"} minH="400px"> 
              <Stack
                height={{base:"150px",md:"110px"}}
                overflow={"hidden"}
                p="0px"
                pt="10px"
                direction="column"
                minH="400px"
              >
            <HStack borderBottom="2px" pb="20px" borderBottomColor="black">
             <Heading fontSize="20px">Add something to youtube</Heading>
            <Select maxW="300px">
                <option>Pending</option>
                <option>Completed</option>
            </Select>
            </HStack>
            <Heading mt="20px" color="rgb(61,144,251)" fontSize="20px">Assingned Users</Heading>
            <Stack pb="30px">
                <HStack justifyContent="space-between">
                    <Heading fontSize="20px">1. Rahul</Heading>
                    <Button bgColor="rgb(255,167,7)" color="white">Remove</Button>
                </HStack>
            </Stack>
            <Heading mt="20px" pb="20px" color="rgb(61,144,251)" fontSize="20px">Tags</Heading>  
        <SimpleGrid pb="40px" columns="4">
        <Text textAlign="center" bgColor="rgb(43,61,92)" color="white" maxW="100px"  borderRadius="10px" p="5px" minW="100px">Coding</Text>
        <Text textAlign="center" bgColor="rgb(43,61,92)" color="white" maxW="100px"  borderRadius="10px" p="5px" minW="100px">Bug</Text>
        <Text textAlign="center" bgColor="rgb(43,61,92)" color="white" maxW="100px"  borderRadius="10px" p="5px" minW="100px">Coding</Text>
        <Text textAlign="center" bgColor="rgb(43,61,92)" color="white" maxW="100px"  borderRadius="10px" p="5px" minW="100px">Coding</Text>
        </SimpleGrid>
               
               <Button mt="20px" color="white" bgColor="rgb(9,70,166)">Remove Task</Button>
              </Stack>
                
        
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    );
  };
  