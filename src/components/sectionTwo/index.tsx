import { Paragraph } from "../common/paragraph";
import SectionWrapper from "../common/sectionWrapper";
import Title from "../common/title";

function stylesGenerator(theme = "dark") {
  return {
    textColorStyle: theme === "dark" ? "text-white" : "text-dark_primary",
  };
}

function SectionTwo({ theme = "dark" }: { theme: "dark" | "light" }) {
  const { textColorStyle } = stylesGenerator(theme);
  return (
    <SectionWrapper theme={theme}>
      <div>
        <Title fontSize={29} textColorStyle={textColorStyle}>
          Hi, I'm Sahan, Junior Full Stack Engineer
        </Title>
      </div>
      <div>
        <Paragraph fontSize={20} textColorStyle={textColorStyle}>
          Professionally connected with the web development industry.Problem
          solver, well-organized person, loyal employee with high attention to
          detail.Fan of Boxing, outdoor activities, video games, and coding of
          course.Interested in the entire front-end spectrum and working on
          ambitious projects with interesting people.
        </Paragraph>
      </div>
    </SectionWrapper>
  );
}

export default SectionTwo;
