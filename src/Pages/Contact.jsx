import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Stack, Input, Button, HStack, Flex, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box bg="black" color="yellow.400" minH="100vh" display="flex" flexDirection="column">
      {/* Header Section */}
      <Box as="header" bg="yellow.400" color="black" py={4} px={6} boxShadow="md">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Heading as="h1" size="lg" fontWeight="bold">
            SpeekUp
          </Heading>

          {/* Navigation Links */}
          <HStack spacing={6}>
            <Button as={Link} to="/" variant="ghost" _hover={{ bg: "yellow.300" }}>
              Accueil
            </Button>
            <Button as={Link} to="/About" variant="ghost" _hover={{ bg: "yellow.300" }}>
              À propos
            </Button>
            <Button as={Link} to="/Contact" variant="ghost" _hover={{ bg: "yellow.300" }}>
              Contact
            </Button>
          </HStack>
        </Flex>
      </Box>

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

    <Box as="footer" bg="yellow.400" color="black" py={4} px={6} textAlign="center" mt="auto">
        <Text fontSize="sm">© 2024 SpeekUp. Tous droits réservés.</Text>
      </Box>
    </Box>
    
    
  );
};

export default Contact;
