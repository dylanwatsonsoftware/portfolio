import Project from "types/project";
import projectsData from "public/data/projects.json";

export const getAllProjects = () => {
  return projectsData as Project[];
};
