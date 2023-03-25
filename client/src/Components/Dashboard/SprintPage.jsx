import { TableContainer, Container, Select, HStack, Button, Center, SimpleGrid, Heading } from "@chakra-ui/react";
import React from "react";

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
            <SimpleGrid p="30px" columns="4" gap="20px">
                <Button>G</Button>
                <Button>G</Button>
                <Button>G</Button>

                <Button>G</Button>
                <Button>G</Button>
                <Button>G</Button>
                <Button>G</Button>

                <Button>G</Button>
            </SimpleGrid>
        </Container>
    )
}