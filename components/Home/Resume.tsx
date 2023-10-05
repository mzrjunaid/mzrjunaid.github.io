import data from "@/data/skills.json";
import Skills from "../Elements/Skills";

const Resume = () => {
  const { frontend, backend } = data;
  return (
    <>
      <Skills data={frontend} />

      <Skills data={backend} />
    </>
  );
};

export default Resume;
