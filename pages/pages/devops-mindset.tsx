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
        <title>Release your inner DevOps - DDD Perth 2022</title>
      </Head>
      <VStack spacing={8} as="main" p={8}>
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
              <a
                href="https://docs.google.com/presentation/d/1lHUyePHp0rDEKk4DQFWfvsFfWZwxCigH/edit?usp=sharing&ouid=106172488995628162832&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
              >
                Slides
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://twitter.com/dylanwatsonsw"
                target="_blank"
                rel="noreferrer"
              >
                Twitter - @dylanwatsonsw
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://dev.to/dylanwatsonsoftware"
                target="_blank"
                rel="noreferrer"
              >
                dev.to - @dylanwatsonsoftware
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://dev.to/dylanwatsonsoftware/the-enterprise-devops-mindset-49g2"
                target="_blank"
                rel="noreferrer"
              >
                DevOps Article - Part 1: The Enterprise DevOps Mindset
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://dev.to/dylanwatsonsoftware/devops-coding-practices-281e"
                target="_blank"
                rel="noreferrer"
              >
                DevOps Article - Part 2: DevOps Coding Practices
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://www.youtube.com/watch?v=RpaYHByKZ6U&ab_channel=DylanWatson"
                target="_blank"
                rel="noreferrer"
              >
                Our DevOps Mindset - YouTube (Previous incarnation of this talk)
              </a>
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </>
  );
};

export default DDPage;
