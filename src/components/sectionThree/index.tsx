import { Paragraph } from "../common/paragraph";
import SectionWrapper from "../common/sectionWrapper";
import Title from "../common/title";

function stylesGenerator(theme = "dark") {
  return {
    textColorStyle: theme === "dark" ? "text-white" : "text-dark_primary",
  };
}
export default function SectionThree({
  theme = "dark",
}: {
  theme: "dark" | "light";
}) {
  const { textColorStyle } = stylesGenerator(theme);
  return (
    <SectionWrapper theme={theme}>
      <Title fontSize={57} textColorStyle={textColorStyle}>
        Skills & Experience
      </Title>
      <div></div>
      <Paragraph fontSize={20} textColorStyle={textColorStyle}>
        {`The main area of expertise is front end development (client side of the web).`}
      </Paragraph>
      <Paragraph fontSize={20} textColorStyle={textColorStyle}>
        {`HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the 
web - WordPress.`}
      </Paragraph>
    </SectionWrapper>
  );
}
