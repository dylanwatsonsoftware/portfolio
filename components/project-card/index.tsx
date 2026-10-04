import {
  Box,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Project from "types/project";

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const destination = project.demoUrl || project.url;
  const isSource = project.url.startsWith("https://github.com/");

  return (
    <Box
      as="article"
      bg="gray.900"
      borderWidth={1}
      borderColor="gray.700"
      rounded="xl"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      transition="border-color 0.2s, transform 0.2s"
      _hover={{ borderColor: "blue.400", transform: "translateY(-3px)" }}
    >
      {project.image && (
        <Link
          href={destination}
          isExternal
          aria-label={`Explore ${project.title}`}
        >
          <Box
            as="img"
            src={project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
            width="100%"
            height="220px"
            objectFit={project.imageFit || "cover"}
            bg={project.imageBackground || "#101827"}
            p={project.imageFit === "contain" ? 6 : 0}
          />
        </Link>
      )}
      <VStack spacing={4} align="stretch" p={6} flex={1}>
        <Heading as="h3" size="md" lineHeight="tall" color="white">
          <Link href={destination} isExternal _hover={{ color: "blue.300" }}>
            {project.title}
          </Link>
        </Heading>
        <Text color="gray.400" lineHeight="tall" flex={1}>
          {project.description}
        </Text>
        {project.tags && (
          <HStack spacing={2} flexWrap="wrap" gridGap={2}>
            {project.tags.map((tag) => (
              <Tag key={tag} size="sm" color="blue.200" bg="whiteAlpha.100">
                {tag}
              </Tag>
            ))}
          </HStack>
        )}
        <HStack spacing={5} pt={2} mt="auto" flexWrap="wrap" gridGap={2}>
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              isExternal
              color="blue.300"
              fontWeight="semibold"
              fontSize="sm"
              display="inline-flex"
              alignItems="center"
              gridGap={1}
            >
              {project.demoLabel || "Try it out"}
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          )}
          {project.url !== project.demoUrl && (
            <Link
              href={project.url}
              isExternal
              color="gray.300"
              fontSize="sm"
              display="inline-flex"
              alignItems="center"
              gridGap={2}
            >
              {isSource ? (
                <FiGithub aria-hidden="true" />
              ) : (
                <FiArrowUpRight aria-hidden="true" />
              )}
              {isSource ? "View source" : "Visit website"}
            </Link>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
