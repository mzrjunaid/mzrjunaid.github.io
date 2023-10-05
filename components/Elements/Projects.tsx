import Card from "./Card";
import Section from "./Section";

type ProjectsProps = {
  data: {
    project: string;
    lang: string[];
    imageName: string;
    url: string;
  }[];
};

const Projects = ({ data }: ProjectsProps) => {
  return (
    <Section title="Projects">
      {data.length > 0 ? (
        <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-center md:justify-normal px-4">
          {data.map((project) => (
            <Card
              key={project.url}
              title={project.project}
              lang={project.lang}
              imageName={project.imageName}
              url={project.url}
            />
          ))}
        </div>
      ) : (
        <div className="text-center ">Working on it</div>
      )}
    </Section>
  );
};

export default Projects;
