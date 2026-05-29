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
    <div
    id="section1"
      className={`pt-6 pb-6 px-3 md:pt-[70px]  ${bgColorStyle} grid grid-cols-1 md:grid-cols-12 max-w-screen-xl mx-auto md:gap-10 items-center`}
    >
      <Content theme={theme} />
      <MainArtWorkMobile theme={theme} />
    </div>
  );
}

export { SectionOne };
