import {
  Box,
  Heading,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MindBlownImage from "public/images/common/Dylan mindblown.png";

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
                Release your inner DevOps
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
                href="https://docs.google.com/presentation/d/15upe6s2_GT7ryEkgoktYeUx9wcLk_IlL7FfoEd1MXYk/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Slides
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://www.youtube.com/watch?v=2KjEBFAVgoU&list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx&ab_channel=DDDPerth"
                target="_blank"
                rel="noreferrer"
              >
                Release your inner DevOps - YouTube Livestream
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
                dev.to Articles - @dylanwatsonsoftware
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
          <br />
          <br />
          <Image
            src={MindBlownImage}
            alt="The DevOps Mindset"
            height={300}
            width={352}
            quality={100}
            objectPosition="right"
            priority
            placeholder="blur"
          />
        </Box>
      </VStack>
    </>
  );
};

export default DDPage;
