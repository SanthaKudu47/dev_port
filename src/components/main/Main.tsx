import { ThemeContext } from "@src/context/themeContext";
import Header from "../header";
import { useContext, useEffect } from "react";
import SectionTwo from "../sectionTwo";
import { SectionOne } from "../sectionOne";
import SectionThree from "../sectionThree";
import SectionFour from "../sectionFour";
import SectionFive from "../sectionFive";
import Footer from "../footer";
import { ScrollTracker } from "../common/scrollTracker";

export default function Main() {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
    console.log(document.body);
    //document.body.classList.add(theme);
  }, [theme]);
  return (
    <>
      <Header theme={theme} />
      <ScrollTracker theme={theme} />
      <SectionOne theme={theme} />
      <SectionTwo theme={theme} />
      <SectionThree theme={theme} />
      <SectionFour theme={theme} />
      <SectionFive theme={theme} />
      <Footer theme={theme} />
    </>
  );
}
