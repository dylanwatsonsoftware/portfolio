import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import AvatarImage from "public/images/common/avatar.jpg";
import { FC } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Page: FC = () => {
  const headingNode = () => {
    return (
      <HStack spacing={4} alignItems="center">
        <Box
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          rounded="full"
          p={1}
          w={100}
          h={100}
        >
          <Image
            src={AvatarImage}
            alt="Dylan Watson"
            height={100}
            width={100}
            quality={100}
            style={{
              borderRadius: "50%",
            }}
            priority
            placeholder="blur"
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="lg" color="white">
              Dylan Watson
            </Heading>
            <Text fontWeight="bold">Software Engineer</Text>
          </VStack>
        </Box>
      </HStack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text fontWeight="bold">
          Technical Lead and Software Engineer that likes to build stuff and get
          it into the hands of users.
        </Text>
      </Box>
    );
  };

  const socialLinksNode = () => {
    return (
      <Box d="flex" alignItems="center">
        <HStack spacing={4}>
          <Link
            py={2}
            px={4}
            href="https://github.com/dylanwatsonsoftware"
            rounded="sm"
            bg="#333"
            color="#fff"
            fontWeight="bold"
            isExternal
            borderWidth={1}
            borderColor="gray.600"
            _hover={{}}
          >
            <HStack spacing={2} alignItems="center">
              <Box as={IoLogoGithub} /> <Text>Github</Text>
            </HStack>
          </Link>
          <Link
            py={2}
            px={4}
            href="https://www.linkedin.com/in/dylanwatson/"
            rounded="sm"
            bg="#0e76a8"
            color="#fff"
            fontWeight="bold"
            isExternal
            borderWidth={1}
            borderColor="blue.400"
            _hover={{}}
          >
            <HStack spacing={2} alignItems="center">
              <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
            </HStack>
          </Link>
        </HStack>
      </Box>
    );
  };

  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <VStack spacing={4} align="left">
        {headingNode()}
        {bioDescriptionNode()}
        {socialLinksNode()}
      </VStack>
    </Box>
  );
};

export default Page;
