import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/card";
import { Heading, Text, Button, Box } from "@chakra-ui/react";

const CustomCard = ({ title, description, buttonText, videoId }) => {
  return (
    <Card borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="lg" maxW="lg" _hover={{boxShadow: "xl", transform: "translateY(-5px)"}}>
      {/* Titre de la carte */}
      <CardHeader>
        <Heading size="md" textAlign="center" mb={4}>{title}</Heading>
      </CardHeader>

      {/* Vidéo YouTube */}
      <CardBody p={0}> 
        <Box position="relative" w="100%" h="160px" overflow="hidden" padding="20px" borderRadius="md" boxShadow="lg">
          <iframe
            src={`https://www.youtube.com/embed/xCOQgo3Ejcw`}
            title="YouTube video player"
            description="wewe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px" 
            }}
          />
        </Box>
      </CardBody>

      {/* Bouton d'action */}
      <CardFooter>
        <Button colorScheme="yellow" mx="auto" _hover={{bg : "yellow.500", tranform: "scale(1.05)"}}>
          {buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
