import { Paragraph } from "../common/paragraph";
import SectionWrapper from "../common/sectionWrapper";
import Title from "../common/title";

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
      <ProjectInfoCard
        thumbnailUrl=""
        projectName="Shushi"
        projectDescription="I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site"
        stack={["JavaScript", "HTML5", "Css3", "JavaScript", "HTML5", "Css3"]}
      />
        <ProjectInfoCard
        thumbnailUrl=""
        projectName="Shushi"
        projectDescription="I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site"
        stack={["JavaScript", "HTML5", "Css3", "JavaScript", "HTML5", "Css3"]}
      />
        <ProjectInfoCard
        thumbnailUrl=""
        projectName="Shushi"
        projectDescription="I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site"
        stack={["JavaScript", "HTML5", "Css3", "JavaScript", "HTML5", "Css3"]}
      />
      </div>

     
    </SectionWrapper>
  );
}
