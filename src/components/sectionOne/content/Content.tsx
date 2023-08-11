import { Paragraph } from "@src/components/common/paragraph";
import Title from "@src/components/common/title";
import { LogoV1 } from "@src/components/sectionOne/logov1/LogoV1";

function stylesGenerator(theme = "dark") {
  return {
    textColorStyle: theme === "dark" ? "text-white" : "text-dark_primary",
    buttonTextStyle:
      theme === "dark" ? "text-dark_secondary" : " text-light_secondary",
  };
}

function Content({ theme }: { theme: "dark" | "light" }) {
  const { textColorStyle, buttonTextStyle } = stylesGenerator(theme);
  return (
    <div className="flex order-last flex-col my-4">
      <div className="my-2">
        <LogoV1 theme={theme} />
      </div>

      <Title fontSize={57} textColorStyle={textColorStyle}>
        Full Stack Developer
      </Title>
      <Paragraph fontSize={20} textColorStyle={textColorStyle}>
        Resolving design problems, building smart user interfaces and useful
        interactions, developing rich web applications and seamless web
        experiences.
      </Paragraph>

      <div
        className={`my-3 font-code-font ${buttonTextStyle} font-bold text-[15px]`}
      >{`aboutMe();`}</div>
    </div>
  );
}

export { Content };
