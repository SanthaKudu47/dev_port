import { useEffect, useState } from "react";
import { Paragraph } from "../common/paragraph";
import SectionWrapper from "../common/sectionWrapper";
import Title from "../common/title";
import { SkillData, paths } from "./data";
import SkillItem from "./skillItem";
import { SkillSkelton } from "./skillItem/skeltion";
import { client } from "@src/utils/sanityClient";

function stylesGenerator(theme = "dark") {
  return {
    textColorStyle: theme === "dark" ? "text-white" : "text-dark_primary",
  };
}

interface ApiData {
  _id: string;
  name: string;
  svg_path: string[];
}
export default function SectionThree({
  theme = "dark",
}: {
  theme: "dark" | "light";
}) {
  const { textColorStyle } = stylesGenerator(theme);
  const [skillData, setSkillData] = useState<SkillData[]>([]);
  const [isDataLoading, setDataLoadingStatus] = useState<boolean>(true);

  useEffect(() => {
    const query = "*[_type == 'skill']{_id,name,svg_path}";
    if (skillData && skillData.length === 0) {
      client
        .fetch<ApiData[]>(query)
        .then((data) => {
          if (data.length === 0) {
            setSkillData(paths);
            setDataLoadingStatus(false);
            return;
          }
          const newData: SkillData[] = [];
          data.map((d) => newData.push({ skill: d.name, paths: d.svg_path }));
          setSkillData(newData);
          setDataLoadingStatus(false);
        })
        .catch((err) => console.log("Failed to fetch data", err));
    }
  }, []);
  return (
    <SectionWrapper id="section3" theme={theme}>
      <div className="flex flex-col  items-start md:items-center">
        <Title textColorStyle={textColorStyle}>Skills & Experience</Title>
        <Paragraph fontSize={20} textColorStyle={textColorStyle}>
          {`The main area of expertise is front end development (client side of the web).`}
        </Paragraph>
        <Paragraph fontSize={20} textColorStyle={textColorStyle}>
          {`HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the 
web - WordPress.`}
        </Paragraph>
      </div>
      {/* justify-items-center grid grid-cols-2 md:grid-cols-1    mt-8 mb-3 gap-y-2 bg-slate-400 */}
      <div className="flex flex-row flex-wrap gap-14 md:gap-10 justify-center mt-8 mb-3 gap-y-2 md:gap-y-5">
        {isDataLoading &&
          paths.map((p, index) => {
            return <SkillSkelton key={`${p.paths}_${index}`} />;
          })}
        {!isDataLoading &&
          skillData.map((p, index) => (
            <SkillItem key={index} skillData={p} theme={theme} />
          ))}
      </div>
    </SectionWrapper>
  );
}
