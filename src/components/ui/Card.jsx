import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/card";
import { Heading, Text, Button, Box } from "@chakra-ui/react";

const CustomCard = ({ title, description, buttonText, videoId }) => {
  return (
    <Card borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md" maxW="lg">
      {/* Titre de la carte */}
      <CardHeader>
        <Heading size="md" textAlign="center">{title}</Heading>
      </CardHeader>

      {/* Vidéo YouTube */}
      <CardBody p={0}> 
        <Box position="relative" w="100%" h="160px" overflow="hidden" padding="20px">
          <iframe
            src={`https://www.youtube.com/embed/xCOQgo3Ejcw`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </CardBody>

      {/* Bouton d'action */}
      <CardFooter>
        <Button colorScheme="blue" mx="auto">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
