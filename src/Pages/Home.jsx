import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  HStack,
} from "@chakra-ui/react";

const Home = () => {
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

      {/* Main Content Section */}
      <Box flex="1" py={10} px={6}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={6}
        >
          {/* Text Content */}
          <Stack spacing={6} maxW="lg" textAlign={{ base: "center", md: "left" }}>
            <Heading
              as="h2"
              size="2xl"
              fontWeight="bold"
              textTransform="uppercase"
              lineHeight="shorter"
            >
              Découvre les talents émergents du rap
            </Heading>
            <Text fontSize="lg" color="yellow.300">
              Un podcast dédié à la mise en lumière des rappeurs et chanteurs en devenir.
              Rejoins-nous pour soutenir la nouvelle génération.
            </Text>
            <Button
              bg="yellow.400"
              color="black"
              size="lg"
              _hover={{ bg: "yellow.300" }}
              as="a"
              href="#contact"
            >
              Rejoins le mouvement
            </Button>
          </Stack>

          {/* Image or Graphic */}
          <Box>
            <Box
              bg="yellow.400"
              borderRadius="md"
              w={{ base: "80%", md: "400px" }}
              h={{ base: "200px", md: "300px" }}
              mx="auto"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="2xl"
              fontWeight="bold"
              color="black"
              textAlign="center"
            >
              🎤 Logo / Illustration
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer Section */}
      <Box as="footer" bg="yellow.400" color="black" py={4} px={6} textAlign="center" mt="auto">
        <Text fontSize="sm">© 2024 SpeekUp. Tous droits réservés.</Text>
      </Box>
    </Box>
  );
};

export default Home;
