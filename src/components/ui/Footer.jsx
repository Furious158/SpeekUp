// Footer.jsx
import React from "react";
import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="yellow.400" color="black" py={8} px={6} textAlign="center" mt="auto">
      <Flex direction="column" align="center" gap={4}>
        {/* Social Media Icons */}
        <HStack spacing={6} justify="center">
          <Button
            as="a"
            href="https://www.instagram.com/speakup_agence?igsh=ZTRjMDBkNmRoZWc2"
            target="_blank"
            variant="ghost"
            color="black"
            _hover={{ color: "yellow.300" }}
          >
            <FaInstagram size={30} />
          </Button>
          <Button
            as="a"
            href="https://www.youtube.com"
            target="_blank"
            variant="ghost"
            color="black"
            _hover={{ color: "yellow.300" }}
          >
            <FaYoutube size={30} />
          </Button>
          <Button
            as="a"
            href="https://www.spotify.com"
            target="_blank"
            variant="ghost"
            color="black"
            _hover={{ color: "yellow.300" }}
          >
            <FaSpotify size={30} />
          </Button>
        </HStack>

        {/* Footer Links */}
        <HStack spacing={6} justify="center" mt={4}>
          <Button as="a" href="/mentions-legales" variant="link" color="black" _hover={{ color: "yellow.300" }}>
            Mentions légales
          </Button>
          <Button as="a" href="/conditions-generales" variant="link" color="black" _hover={{ color: "yellow.300" }}>
            Conditions générales
          </Button>
        </HStack>

        {/* Copyright */}
        <Text fontSize="sm" mt={4}>
          © 2024 SpeekUp. Tous droits réservés.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
