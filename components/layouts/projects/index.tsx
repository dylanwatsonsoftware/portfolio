import { Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import ProjectCard from "components/project-card";
import { FC } from "react";
import Project from "types/project";

const Projects: FC<{ projects: Project[] }> = ({ projects = [] }) => (
  <VStack spacing={8} align="stretch">
    <VStack spacing={3} align="stretch">
      <Heading as="h1" size="2xl" color="white">
        Projects
      </Heading>
      <Text color="gray.400">
        A collection of apps, games, experiments, and client work.
      </Text>
    </VStack>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </SimpleGrid>
    {!projects.length && <Text color="gray.400">No projects found!</Text>}
  </VStack>
);

export default Projects;
