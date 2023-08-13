import SectionWrapper from "../common/sectionWrapper";
import Title from "../common/title";
import Contact from "./contact";
import { contactData } from "./data";

function stylesGenerator(theme = "dark") {
  return {
    textColorStyle: theme === "dark" ? "text-white" : "text-dark_primary",
  };
}

export default function SectionFive({
  theme = "dark",
}: {
  theme: "dark" | "light";
}) {
  const { textColorStyle } = stylesGenerator(theme);
  return (
    <SectionWrapper theme={theme}>
      <Title fontSize={57} textColorStyle={textColorStyle}>
        Contact
      </Title>

      <div className="flex flex-col gap-5 mt-5">
        {contactData.map((data, index) => (
          <Contact
            key={index}
            contact={data.contact}
            type={data.type}
            theme={theme}
            name={data.name}
            path={data.path}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
