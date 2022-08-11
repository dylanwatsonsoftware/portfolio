import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";

const DDPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Building a DevOps Mindset - DDD Perth 2022</title>
      </Head>
      <VStack spacing={32} as="main" p={8}>
        <Box as="section" maxW="2xl" mx="auto" w="100%">
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
                Building a DevOps Mindset
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
                Dylan Watson - DDD Perth 2022
              </Heading>
            </Box>
          </VStack>
        </Box>
        <Box as="section" maxW="2xl" mx="auto" w="100%">
          <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </>
  );
};

export default DDPage;
