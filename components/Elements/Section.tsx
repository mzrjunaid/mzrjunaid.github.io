import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="w-full p-2">
      <h2 className="text-xl font-semibold tracking-wider mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
