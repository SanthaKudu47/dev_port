import { SkillData } from "../data";

function stylesGenerator(theme = "dark") {
  return {
    bgcolorStyle: theme === "dark" ? "bg-dark_secondary" : "bg-light_secondary",
    fillColor: theme === "dark" ? "black" : "#EAEDF5",
    textColor: theme === "dark" ? "text-white" : "text-black",
  };
}

export default function SkillItem({
  skillData,
  theme = "dark",
}: {
  skillData: SkillData;
  theme: "dark" | "light";
}) {
  const { bgcolorStyle, fillColor, textColor } = stylesGenerator(theme);
  return (
    <>
      <div className={`text-right w-[130px] ${textColor}  flex flex-col`}>
        <div
          className={`w-[130px] h-[130px] ${bgcolorStyle} relative flex justify-center items-center`}
        >
          <div className="absolute top-1 left-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.772064 0.772004L39.0074 9.95723L9.95729 39.0073L0.772064 0.772004Z"
                fill={fillColor}
              />
            </svg>
          </div>
          <div className="flex w-full justify-center items-center p-1 ">
            <svg fill="none" viewBox="0 0 256 256" height="90%" width="90%">
              {skillData.paths.map((p,index) => (
                <path
                key={index}
                  fill={fillColor}
                  fillRule="evenodd"
                  d={p}
                  clipRule="evenodd"
                />
              ))}
            </svg>
          </div>
        </div>
        <span>{skillData.skill}</span>
      </div>
    </>
  );
}
