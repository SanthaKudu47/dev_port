import { Paragraph } from "../common/paragraph";
import SectionWrapper from "../common/sectionWrapper";
import Title from "../common/title";
import { projectData } from "./data";

import { ProjectInfoCard } from "./projectInfoCard/card";

function stylesGenerator(theme = "dark") {
  return {
    textColorStyle: theme === "dark" ? "text-white" : "text-dark_primary",
  };
}
export default function SectionFour({
  theme = "dark",
}: {
  theme: "dark" | "light";
}) {
  const { textColorStyle } = stylesGenerator(theme);
  return (
    <SectionWrapper theme={theme}>
      <Title fontSize={57} textColorStyle={textColorStyle}>
        Previous Projects
      </Title>
      <Paragraph fontSize={20} textColorStyle={textColorStyle}>
        I have built various different projects to fit different aspects of the
        client's business. If you want to see more examples of my work than the
        ones showcased in this site, please contact me!
      </Paragraph>
      <div className="mt-10 mb-4 gap-3 flex flex-col">
        {projectData.map((data, index) => (
          <ProjectInfoCard
            repo={data.repo}
            link={data.link}
            key={index}
            thumbnailUrl={data.imageUrl}
            theme={theme}
            projectName={data.projectName}
            projectDescription={data.projectDescription}
            stack={data.stack}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
