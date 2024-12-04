import React from "react";
import { Box, Heading, Stack, Input, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box bg="black" color="yellow.400" minH="100vh" py={10} px={6} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>
        Contactez-nous
      </Heading>
      <Stack spacing={4} maxW="md" mx="auto">
        <Input placeholder="Nom" bg="white" color="black" />
        <Input placeholder="Email" bg="white" color="black" />
        <Input placeholder="Message" bg="white" color="black" />
        <Button bg="yellow.400" color="black" _hover={{ bg: "yellow.300" }}>
          Envoyer
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
