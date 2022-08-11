import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
          <UnorderedList style={{ textDecoration: "underline" }}>
            <ListItem>
              <Link
                href="https://docs.google.com/presentation/d/1lHUyePHp0rDEKk4DQFWfvsFfWZwxCigH/edit?usp=sharing&ouid=106172488995628162832&rtpof=true&sd=true"
                target="_blank"
              >
                Slides
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/dylanwatsonsw" target="_blank">
                Twitter - @dylanwatsonsw
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://dev.to/dylanwatsonsoftware" target="_blank">
                dev.to - @dylanwatsonsoftware
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://dev.to/dylanwatsonsoftware/the-enterprise-devops-mindset-49g2"
                target="_blank"
              >
                DevOps Article - Part 1: The Enterprise DevOps Mindset
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://dev.to/dylanwatsonsoftware/devops-coding-practices-281e"
                target="_blank"
              >
                DevOps Article - Part 2: DevOps Coding Practices
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </>
  );
};

export default DDPage;
