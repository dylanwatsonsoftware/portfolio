import {
  Box,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import ProjectCard from "components/project-card";
import Project from "types/project";

interface Props {
  projects: Project[];
  hideViewAllLinksNode?: boolean;
}

const Projects: FC<Props> = ({
  projects = [],
  hideViewAllLinksNode = false,
}) => (
  <VStack spacing={8} align="stretch">
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gridGap={4}
      flexWrap="wrap"
    >
      <Box>
        <Heading as="h2" size="xl" color="white">
          Recent projects
        </Heading>
        <Text color="gray.400" mt={3}>
          Apps, games, and tools I&apos;ve been building.
        </Text>
      </Box>
      {!hideViewAllLinksNode && (
        <Link href="/projects" passHref>
          <ChakraLink color="blue.300" fontSize="sm" fontWeight="semibold">
            View all projects →
          </ChakraLink>
        </Link>
      )}
    </Box>
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </SimpleGrid>
    {!projects.length && <Text color="gray.400">No projects found!</Text>}
  </VStack>
);

export default Projects;
