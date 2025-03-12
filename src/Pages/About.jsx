import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, HStack, Flex, Text, Button} from "@chakra-ui/react";

const About = () => {
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
        À propos de nous
      </Heading>
      <Text fontSize="lg">
        Notre podcast met en lumière les talents émergents du rap. Découvrez leur univers et leur musique.
        <br />
        👋 Bienvenue dans Speak Up, le podcast qui donne la parole aux créateurs et acteurs de la culture rennaise. Ici, on célèbre toutes les formes d’art : musique, danse, théâtre, écriture, arts visuels… et bien plus encore. Que vous soyez artiste émergent, passionné confirmé ou simple curieux, Speak Up est votre rendez-vous avec l’expression culturelle."
      </Text>
    </Box>

     <Box as="footer" bg="yellow.400" color="black" py={4} px={6} textAlign="center" mt="auto">
        <Text fontSize="sm">© 2024 SpeekUp. Tous droits réservés.</Text>
      </Box>
    </Box>
  );
};

export default About;
