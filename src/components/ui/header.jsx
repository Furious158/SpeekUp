// Header.js
import React from "react";
import {Link} from "react-router-dom";
import { Box, Heading, HStack, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" bg="yellow.400" color="black" py={4} px={6}>
      <Heading as="h1" size="lg">
        SpeekUp
      </Heading>
      <HStack spacing={6}>
        <Button as={Link} to="/" variant="ghost">Accueil</Button>
        <Button as={Link} to="/About" variant="ghost">À propos</Button>
        <Button as={Link} to="/Contact" variant="ghost">Contact</Button>
      </HStack>
    </Box>
  );
};

export default Header;
