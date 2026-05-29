import { useState, useEffect, useRef } from "react";

function typeContent(
  contentToBeTyped: string,
  typedContent = "",
  duration = 100,
  handler: (value: string) => void,
  stepper: () => void
) {
  if (contentToBeTyped.split("").length != typedContent.length) {
   // console.log("typing", typedContent, contentToBeTyped);
    return setTimeout(() => {
      const newValue = typedContent + contentToBeTyped[typedContent.length];
      handler(newValue);
    }, duration);
  } else {
    //console.log("finished typing....", stepper);
    stepper();
    return null;
  }
}

function styleGenerator(mode: "light" | "dark") {
  return {
    bgColorStyle: mode === "dark" ? "bg-dark_primary" : "bg-light_primary",
    borderColorStyle:
      mode === "dark" ? "border-dark_secondary" : "border-dark_primary",
    textColorStyle: mode === "dark" ? "text-dark_white" : "text-dark_primary",
    buttonColorStyle: mode === "dark" ? "bg-dark_secondary" : "bg-dark_primary",
    itemContainerBgStyle:
      mode === "dark" ? "bg-dark_ui_bg" : "bg-light_secondary",
    itemColor: mode === "dark" ? "#4CD86B" : "#18191C",
    sidePanelBgStyle: mode === "dark" ? "bg-dark_side_panel" : "bg-light_1",
    syntaxColor1: mode === "dark" ? "text-dark_text_pink" : "text-light_5", //function
    syntaxColor2: mode === "dark" ? "text-dark_secondary" : "text-light_4", //Card
    syntaxColor3:
      mode === "dark" ? "text-dark_text_light_blue" : "text-light_3", //layout
    syntaxColor4: mode === "dark" ? "text-dark_white" : "text-light_2", //base
  };
}

export default function Editor({
  trigger,
  theme = "dark",
}: {
  trigger: () => void;
  theme: "dark" | "light";
}) {
  const [content, setContent] = useState({
    line1p1: "",
    line1p2: "",
    line2: "",
    line3: "",
  });
  const [steps, setSteps] = useState(0);
  let timer = useRef<null | NodeJS.Timeout>(null);

  const {
    bgColorStyle,
    borderColorStyle,
    buttonColorStyle,
    textColorStyle,
    sidePanelBgStyle,
    syntaxColor1,
    syntaxColor2,
    syntaxColor3,
    syntaxColor4,
  } = styleGenerator(theme);

  function updateContentLine1P1(value: string) {
    const newState = { ...content, line1p1: value };
    setContent(newState);
  }

  function updateContentLine1P2(value: string) {
    const newState = { ...content, line1p2: value };
    setContent(newState);
  }

  function updateContentLine2(value: string) {
    const newState = { ...content, line2: value };
    setContent(newState);
  }

  //colors
  //styles

  useEffect(() => {
    //console.log("Running");
    switch (steps) {
      case 0:
        timer.current = typeContent(
          "return ",
          content.line1p1,
          85,
          updateContentLine1P1,
          function () {
            setSteps(1);
          }
        );
        break;

      case 1:
        //console.log("phase 2");
        timer.current = typeContent(
          "<Layout>",
          content.line1p2,
          85,
          updateContentLine1P2,
          () => {
            setSteps(2);
          }
        );
        break;

      case 2:
        //console.log("phase 2");
        setContent({ ...content, line3: "</Layout>" });
        setSteps(3);
        trigger();
        break;

      case 3:
        //console.log("phase 3");
        timer.current = typeContent(
          "<Product details={data} />",
          content.line2,
          65,
          updateContentLine2,
          () => {
            setSteps(4);
            trigger();
          }
        );
        break;

      default:
        break;
    }

    return () => {
      if (timer.current == null) return;
      clearTimeout(timer.current);
      //console.log("Need to Clear", timer.current);
    };
  }, [content, steps]);

  return (
    <div
      className={`${bgColorStyle} border-2 ${borderColorStyle}  w-full rounded`}
    >
      <div
        className={`border-b-2  ${borderColorStyle} text-dark_white flex h-[40px]`}
      >
        <div
          className={`flex border-r-2 ${borderColorStyle} items-center px-5 gap-3`}
        >
          {[1, 2, 3].map((e) => (
            <div
              key={e}
              className={`rounded-full ${buttonColorStyle} w-[15px] h-[15px]`}
            ></div>
          ))}
        </div>
        <div
          className={`flex items-center px-10 border-r-2 ${borderColorStyle} ${textColorStyle}`}
        >
          index.js
        </div>
      </div>
      <div className="flex h-full relative  py-5">
        <div className={`${sidePanelBgStyle} ${textColorStyle}`}>
          <ul className="">
            <li className="px-2">1</li>
            <li className="px-2">2</li>
            <li className="px-2">3</li>
            <li className="px-2">4</li>
            <li className="px-2">5</li>
          </ul>
        </div>
        <div className={`${syntaxColor4} px-2`}>
          <span>
            {`export default `}
            <span className={syntaxColor1}>function</span>&nbsp;
            <span className={syntaxColor2}>Card</span>
            {`() { `}
          </span>
          <br></br>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {content.line1p1}
            <span className={syntaxColor3}>{content.line1p2}</span>
            {steps === 1 && (
              <span className="text-gray-600 pb-1 mb-1 animate-pulse">|</span>
            )}
          </span>
          <br></br>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {content.line2}
            {steps == 3 && (
              <span className="text-gray-600 pb-1 mb-1 animate-pulse">|</span>
            )}
          </span>
          <br></br>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className={syntaxColor3}>{content.line3}</span>
            {steps === 2 && (
              <span className="text-gray-600 pb-1 mb-1 animate-pulse">|</span>
            )}
          </span>
          <br></br>
          <span> {`}`}</span>
        </div>
      </div>
    </div>
  );
}
