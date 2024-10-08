import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";

const Jumbotron: FC = () => {
  return (
    <VStack
      spacing={8}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      pt={24}
      pb={12}
    >
      <Box>
        <Heading
          as="h1"
          fontFamily="body"
          bgColor="blue.400"
          bgClip="text"
          size="4xl"
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          className="jumbotron-name-heading"
        >
          Dylan Watson
        </Heading>
      </Box>
      <Box>
        <Heading
          as="h2"
          size="lg"
          lineHeight="tall"
          color="gray.500"
          fontWeight="medium"
        >
          I&apos;m a{" "}
          <Box as="span" color="gray.300">
            Software Engineer
          </Box>
          , who likes{" "}
          <Box as="span" color="gray.300">
            designing
          </Box>
          , and{" "}
          <Box as="span" color="gray.300">
            building
          </Box>{" "}
          projects that{" "}
          <Box as="span" color="gray.300">
            excite
          </Box>
          !
        </Heading>
      </Box>
    </VStack>
  );
};

export default Jumbotron;
