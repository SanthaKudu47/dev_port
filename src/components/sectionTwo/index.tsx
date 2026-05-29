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
    <SectionWrapper id="section2" theme={theme}>
      <div className="grid grid-cols-1 md:grid-cols-12 my-2 md:my-5 items-center gap-10">
        <div className="col-span-1 md:col-span-5 hidden md:flex">
          <Title textColorStyle={textColorStyle}>
            Hi, I'm Sahan, Junior Full Stack Engineer
          </Title>
        </div>
        <div className="col-span-1 md:col-span-5 block md:hidden">
          <h1
            className={`font-primary-font font-bold leading-none ${textColorStyle}  text-[35px]`}
          >
            Hi, I'm Sahan, Junior Full Stack Engineer
          </h1>
        </div>
        <div className="col-span-1 md:col-span-7 text-left mx-0 md:mx-5">
          <Paragraph fontSize={20} textColorStyle={textColorStyle}>
            Passionate Full-Stack Developer with a creative approach to
            problem-solving and <span className="text-dark_secondary">2 years +</span> of experience crafting
            robust and user-centered web applications.thrive on building
            seamless digital experiences that combine functionality with
            aesthetics.Continuous learning drives me to contribute effectively
            to dynamic development teams.Fan of Reading, outdoor activities,
            video games.
          </Paragraph>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default SectionTwo;
