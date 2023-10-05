import data from "@/data/skills.json";
import projectsData from "@/data/projects.json";
import Skills from "../Elements/Skills";
import Projects from "../Elements/Projects";

const Resume = () => {
  const { frontend, backend } = data;
  const { frontendProjects, backendProjects } = projectsData;
  return (
    <>
      <Skills data={frontend} />
      <Projects data={frontendProjects} />
      <Skills data={backend} />
      <Projects data={backendProjects} />
    </>
  );
};

export default Resume;
