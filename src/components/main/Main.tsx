import { ThemeContext } from "@src/context/themeContext";
import Header from "../header";
import { useContext } from "react";
import SectionTwo from "../sectionTwo";
import { SectionOne } from "../sectionOne";
import SectionThree from "../sectionThree";
import SectionFour from "../sectionFour";

export default function Main() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Header theme={theme} />
      <SectionOne theme={theme} />
      <SectionTwo theme={theme} />
      <SectionThree theme={theme} />
      <SectionFour theme={theme} />
    </>
  );
}
