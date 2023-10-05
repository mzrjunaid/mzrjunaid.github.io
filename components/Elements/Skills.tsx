import Section from "./Section";
import Tab from "./Tab";

type SkillsProps = {
  data: {
    title: string;
    lang: string[];
    framework: string[];
    tools: string[];
  };
};

const Skills = ({ data }: SkillsProps) => {
  const { title, lang, framework, tools } = data;
  return (
    <Section title={title}>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4">
        <Tab title="Programming Languages" skills={lang} />
        <Tab title="Libraries & Frameworks" skills={framework} />
        <Tab title="Tools & Platforms" skills={tools} />
      </div>
    </Section>
  );
};

export default Skills;
