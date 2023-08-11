import { Content } from "@src/components/sectionOne/content/Content";
import MainArtWorkMobile from "../mainArtwork/MainArtworkMobile";

function styleGenerator(mode: "light" | "dark") {
  return {
    bgColorStyle: mode === "dark" ? "bg-dark_primary" : "bg-light_primary",
  };
}

function SectionOne({ theme }: { theme: "dark" | "light" }) {
  const { bgColorStyle } = styleGenerator(theme);

  return (
    <div className={`py-6 px-3 ${bgColorStyle} flex flex-col`}>
      <Content theme={theme} />
      <MainArtWorkMobile theme={theme} />
    </div>
  );
}

export { SectionOne };
