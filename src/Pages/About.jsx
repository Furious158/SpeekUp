import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box bg="black" color="yellow.400" minH="100vh" py={10} px={6} textAlign="center">
      <Heading as="h1" size="2xl" mb={4}>
        À propos de nous
      </Heading>
      <Text fontSize="lg">
        Notre podcast met en lumière les talents émergents du rap. Découvrez leur univers et leur musique.
      </Text>
    </Box>
  );
};

export default About;
