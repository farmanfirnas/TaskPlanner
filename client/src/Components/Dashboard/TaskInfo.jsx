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
  SimpleGrid,
  useToast

} from "@chakra-ui/react";

import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RxEyeOpen } from "react-icons/rx"
export const TaskInfo = ({ data = {} }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast=useToast()
  const handleStatus = async (ev) => {
    const datas = await fetch(`https://taskplannerbyfarman.onrender.com/task/${data._id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ "status": ev.target.value })
    })
    toast({
      description:"Status Updated Successfully"
    })
  }
  return (
    <>
      <Button bgColor="rgb(9,70,166)" onClick={onOpen} cursor={"pointer"} color="white" rightIcon={<RxEyeOpen color="white" />}>View/Update</Button>


      <Modal
        colorScheme={"white"}
        minW="600px"
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent minW={{ base: "80%", md: "400px" }} maxW={{ base: "80%", md: "400px" }}>
          <ModalHeader


          ></ModalHeader>
          <ModalCloseButton color={"rgb(43,61,92)"} />
          <ModalBody bgColor={"white"} minH="400px">
            <Stack
              height={{ base: "150px", md: "110px" }}
              overflow={"hidden"}
              p="0px"
              pt="10px"
              direction="column"
              minH="400px"
              textAlign={"center"}
            >
              <Stack direction={"column"} borderBottom="2px" pb="20px" borderBottomColor="black">
                <Heading fontSize="20px">{data?.task}</Heading>
                <Select  onChange={(ev) => { handleStatus(ev) }} placeholder={data.status}  maxW="300px" >
                       <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  
                </Select>
              </Stack>
              <Heading mt="20px" color="rgb(61,144,251)" fontSize="20px">Assingned Users</Heading>
              <Stack pb="30px">
                {
                  data?.assign?.map((e, i) => {
                    return <HStack justifyContent="space-between">
                      <Heading fontSize="20px">{i + 1}. {e.name}</Heading>
                
                    </HStack>
                  })
                }
              </Stack>
              <Heading mt="20px" pb="20px" color="rgb(61,144,251)" fontSize="20px">Tags</Heading>
              <SimpleGrid textAlign={"center"} gap="10px" justifyContent="center" justifyItems={"center"} pb="40px" columns="3" gaps="10px">
                {
                  data?.tags?.map((e) => {
                    return <Text textAlign="center" bgColor="rgb(43,61,92)" color="white" maxW="100px" borderRadius="10px" p="5px" minW="100px">{e}</Text>
                  })
                }

              </SimpleGrid>

              <Button mt="20px" color="white" bgColor="rgb(9,70,166)">Remove Task</Button>
            </Stack>


          </ModalBody>


        </ModalContent>
      </Modal>
    </>
  );
};
