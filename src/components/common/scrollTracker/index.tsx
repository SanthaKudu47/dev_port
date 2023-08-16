import { useEffect, useState } from "react";
import useScroll from "./hooks";
import { Indicator } from "./indicator";

function activateIndicator(location: number, targetOffsets: number[]) {
  const minified = Math.abs(Math.floor(location + 62));
  const documentHeight = document.body.offsetHeight;
  let active: number = targetOffsets[0];

  if (Math.abs(documentHeight - (location + window.innerHeight)) < 5) {
    return targetOffsets.length - 1;
  }

  targetOffsets.forEach((offSet, index) => {
    if (minified - offSet > 0) {
      active = index;
    }
  });

  return active;
}

const sectionIds = ["section1", "section2", "section3", "section4", "section5"];

function ScrollTracker({ theme = "dark" }: { theme: "dark" | "light" }) {
  const [scrollY, direction] = useScroll();
  const [location, setLocation] = useState<number>(0);
  const [offSets, setOffSets] = useState<number[]>([]);
  const [value, setValues] = useState<number[]>([]);

  useEffect(() => {
    if (offSets.length !== 0) return;
    const params: number[] = [];
    sectionIds.forEach((id) => {
      const e = document.getElementById(id);
      if (e) {
        params.push(e.offsetTop);
      }
    });
    setOffSets(params);
  }, [offSets]);

  useEffect(() => {
    if (value.length !== 0) return;
    const params: number[] = [];
    const elements = document.getElementsByClassName("section");
    if (elements && elements.length > 0) {
      for (let index = 0; index < elements.length; index++) {
        const element: HTMLDivElement = elements[index] as HTMLDivElement;
        params.push(element.offsetTop);
      }
      params.sort((a, b) => a - b);
      setValues(params);
      setLocation(params[0]);
    }
  }, [offSets]);

  useEffect(() => {
    if (value.length === 0) return;
    const active = activateIndicator(scrollY, offSets); //activeAreaIndex
    if (direction === "down") {
      const condition =
        Math.abs(value[active] - location) > 0 &&
        Math.abs(value[active] - location) < 5;
      if (location === 0) {
        setLocation(value[active]);
      } else {
        if (!condition) {
          setLocation(value[active]);
        }
      }
    } else {
      const condition =
        Math.abs(location - value[active]) > 0 &&
        Math.abs(location - value[active]) < 5;
      if (location === 0) {
        setLocation(value[active]);
      } else {
        if (!condition) {
          setLocation(value[active]);
        }
      }
    }
  }, [scrollY]);

  function animateIndicator(
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) {
    e.stopPropagation();
    setLocation(value[index]);
  }

  return (
    <div className="fixed  right-0 left-0 max-w-screen-xl mx-auto p-2 h-[500px] hidden md:block">
      <div className="relative flex w-full h-full justify-end items-center p-1">
        <div className="w-[30px] h-full flex justify-center items-center gap-2">
          <div
            className={`flex flex-col justify-evenly ${
              theme === "dark" ? "text-white" : "text-dark-primary"
            } h-[300px] relative`}
          >
            {value.length > 0 && offSets.length > 0 && (
              <Indicator to={location} theme={theme} />
            )}

            {sectionIds.map((id, index) => (
              <div
                key={index}
                onClick={(e) => animateIndicator(e, index)}
                className="section"
              >
                <a href={`#${id}`}>{index + 1}</a>
              </div>
            ))}
          </div>
          <div
            className={`w-[2px] h-[300px]  ${
              theme === "dark" ? "bg-dark_white" : "bg-dark_primary"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export { ScrollTracker };
