import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer"
import { Box, Heading, HStack, Flex, Text, Button} from "@chakra-ui/react";
import Header from "../components/ui/header";

const About = () => {
  return (
    <Box bg="black" color="yellow.400" minH="100vh" display="flex" flexDirection="column">
      {/* Header Section */}
      <Header>
      </Header>

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
{/*section footer*/}
     <Footer>
     </Footer>
     </Box>
  );
};

export default About;
