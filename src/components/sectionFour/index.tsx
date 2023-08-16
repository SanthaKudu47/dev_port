import { useEffect, useState } from "react";
import { Paragraph } from "../common/paragraph";
import SectionWrapper from "../common/sectionWrapper";
import Title from "../common/title";
import { ProjectDataInterface, projectData } from "./data";
import { ProjectInfoCard, ProjectInfoCardWeb } from "./projectInfoCard/card";
import { client } from "@src/utils/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import {
  ProjectCardSkeltonDesktop,
  ProjectCardSkeltonMobile,
} from "./projectInfoCard/skelton";

function stylesGenerator(theme = "dark") {
  return {
    textColorStyle: theme === "dark" ? "text-white" : "text-dark_primary",
  };
}

interface ApiDataInterface {
  description: string;
  link: string;
  repo: string;
  _id: string;
  stack: string[];
  name: string;
  thumbnail_desktop: {
    _type: "image";
    asset: {
      _ref: string;
      _type: string;
    };
  };
  thumbnail_mobile: {
    _type: "image";
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export default function SectionFour({
  theme = "dark",
}: {
  theme: "dark" | "light";
}) {
  const [projectDetails, setProjectDetails] = useState<ProjectDataInterface[]>(
    []
  );
  const [isDataLoading, setDataLoadingStatus] = useState<boolean>(true);
  const { textColorStyle } = stylesGenerator(theme);

  useEffect(() => {
    if (projectDetails && projectDetails.length == 0) {
      const builder = imageUrlBuilder(client);
      const query = `*[_type=='project']|order('_createdAt'){name,description,link,repo,_id,stack,thumbnail_web,thumbnail_desktop,thumbnail_mobile}`;
      //load data
      client
        .fetch<ApiDataInterface[]>(query)
        .then((data) => {
          if (data && data.length === 0) {
            setProjectDetails(projectData);
            setDataLoadingStatus(false);
            return;
          }

          const newData: ProjectDataInterface[] = [];
          data.map((d) => {
            const {
              description,
              link,
              name,
              repo,
              stack,
              thumbnail_desktop,
              thumbnail_mobile,
              _id,
            } = d;
            newData.push({
              id: _id,
              desktop: builder.image(thumbnail_desktop.asset).url(),
              mobile: builder.image(thumbnail_mobile.asset).url(),
              link: link,
              projectDescription: description,
              projectName: name,
              repo: repo,
              stack: stack,
            });
          });
          setProjectDetails(newData);
          setDataLoadingStatus(false);
        })
        .catch((err) => console.log("Failed to Load data", err));
    }
  }, []);

  return (
    <SectionWrapper id="section4" theme={theme}>
      <div className="flex flex-col  items-start md:items-center">
        <Title textColorStyle={textColorStyle}>Previous Projects</Title>
        <Paragraph fontSize={20} textColorStyle={textColorStyle}>
          I have built various different projects to fit different aspects of
          the client's business. If you want to see more examples of my work
          than the ones showcased in this site, please contact me!
        </Paragraph>
      </div>

      <div className="mt-10 mb-4 gap-3 flex flex-col md:flex-row flex-wrap md:hidden">
        {isDataLoading && <ProjectCardSkeltonMobile />}
        {!isDataLoading &&
          projectDetails.map((data, index) => (
            <ProjectInfoCard
              repo={data.repo}
              link={data.link}
              key={index}
              thumbnailUrl={data.mobile}
              theme={theme}
              projectName={data.projectName}
              projectDescription={data.projectDescription}
              stack={data.stack}
            />
          ))}
      </div>
      <div className=" flex-col gap-5 justify-center mx-auto mt-10 hidden md:flex">
        {isDataLoading && <ProjectCardSkeltonDesktop />}
        {!isDataLoading &&
          projectDetails.map((data, index) => (
            <ProjectInfoCardWeb
              repo={data.repo}
              link={data.link}
              key={index}
              thumbnailUrl={data.desktop}
              theme={theme}
              projectName={data.projectName}
              projectDescription={data.projectDescription}
              stack={data.stack}
            />
          ))}
      </div>
    </SectionWrapper>
  );
}
