import { Box, HStack, Link as _Link } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import logo from "public/images/common/favicon.svg";

interface NavLink {
  url: string;
  title: string;
}

const LINKS = [
  {
    url: "/projects",
    title: "Projects",
  },
  {
    url: "/articles",
    title: "Articles",
  },
  {
    url: "/guides",
    title: "Guides",
  },
  {
    url: "/about",
    title: "About",
  },
];

const Navbar: FC = () => {
  const menuNode = () => {
    return (
      <HStack isInline spacing={[0, 4]} alignItems="center">
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                <Link href={link.url} passHref>
                  <_Link
                    px={4}
                    py={2}
                    href={link.url}
                    rounded="sm"
                    fontSize={["sm", "md"]}
                    borderWidth={1}
                    borderColor="transparent"
                    _hover={{
                      textDecoration: "none",
                      bgColor: "gray.900",
                      borderWidth: 1,
                      borderColor: "gray.700",
                    }}
                    _focus={{ outline: "none" }}
                  >
                    {link.title}
                  </_Link>
                </Link>
              </Box>
            );
          }),
        ]}
      </HStack>
    );
  };

  return (
    <Box as="header" zIndex={1} borderTopWidth={5} borderColor="blue.400">
      <Box mx="auto" px={4}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          py={4}
          flexDir={["column", "column", "row"]}
          gridGap={[4, 4, 0]}
        >
          <Box d="flex" alignItems="center">
            <Link href="/" passHref>
              <_Link
                href="/"
                d="flex"
                _focus={{ outline: "none" }}
                aria-label="Logo"
              >
                <Image src={logo} height={32} width={32} alt="logo" />
              </_Link>
            </Link>
          </Box>
          {menuNode()}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
