export interface ProjectDataInterface {
  id: string;
  projectName: string;
  projectDescription: string;
  stack: string[];
  link: string;
  repo: string;
  desktop: string;
  mobile: string;
}

const projectData: ProjectDataInterface[] = [
  {
    projectName: "Alex Portfolio",
    projectDescription:
      "I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site",
    stack: ["JavaScript", "HTML5", "Css3", "JavaScript", "HTML5", "Css3"],
    link: "https://alex-portfolio-z0qb.onrender.com",
    repo: "https://github.com/SanthaKudu47/portfolio",
    desktop: "http://localhost:5173/public/thumb_one.png",
    mobile: "http://localhost:5173/public/thumb_one.png",
    id: "4654654654",
  },
  {
    projectName: "Alex Portfolio",
    projectDescription:
      "I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site",
    stack: ["JavaScript", "HTML5", "Css3", "JavaScript", "HTML5", "Css3"],
    link: "https://alex-portfolio-z0qb.onrender.com",
    repo: "https://github.com/SanthaKudu47/portfolio",
    desktop: "http://localhost:5173/public/thumb_one.png",
    mobile: "http://localhost:5173/public/thumb_one.png",
    id: "465465465278",
  },
];

export { projectData };
