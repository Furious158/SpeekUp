import React from "react";
import { Link } from "react-router-dom";
import CustomCard from "../components/ui/Card";
import { Separator } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import Header from "../components/ui/header"; // Correction de l'importation
import Footer from "../components/ui/Footer";
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
      <Header /> {/* Header sans enfant à passer */}

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
              href="/contact"
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

      {/* Nouveautés Section */}
      <Box py={8}>
        <Separator
          borderColor="yellow.300"
          borderWidth="2px"
          mb={6}
          position="relative"
        >
          <Text
            position="absolute"
            top="-10px"
            left="50%"
            transform="translateX(-50%)"
            bg="black"
            px={4}
            color="yellow.400"
            fontSize="xl"
            fontWeight="bold"
          >
            Nouveautés
          </Text>
        </Separator>
      </Box>

      {/* Cards Section */}
      <Box>
        <Flex wrap="wrap" gap={20} justify="center" mb={20}>
          <CustomCard
            title="Présentation du projet et de l'équipe 🔥"
            description="Découvrez SpeekUp et son équipe !"
            buttonText="Regarder" //lien pour regarder sur ytb
            videoId="xCOQgo3Ejcw" // Remplace par un vrai ID YouTube
          />

          <CustomCard
            title="Interview exclusive 🎤"
            description="Un artiste parle de son parcours et de son inspiration."
            buttonText="Regarder" //lien pour regarder sur ytb
            videoId="xCOQgo3Ejcw"
          />
        </Flex>
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default Home;
