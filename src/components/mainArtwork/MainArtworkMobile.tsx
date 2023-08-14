import { useState } from "react";
import BrowserUi from "./browser/BrowserUi";
import Editor from "./editor/Editor";

export default function MainArtWorkMobile({
  theme,
}: {
  theme: "dark" | "light";
}) {
  const [step, setSteps] = useState(0);
  function trigger() {
    setSteps(step + 1);
  }
  return (
    <div className="relative min-w-[350px] md:max-w-[450px] mt-[67px] md:mt-0 col-span-1 md:col-span-7 mx-auto">
      <div className="z-0 relative">
        <Editor trigger={trigger} theme={theme} />
      </div>
      <div className="w-full -mt-10 ml-0  md:ml-10 md:-mt-9 relative min-w-[350px]">
        <BrowserUi step={step} theme={theme} />
      </div>
    </div>
  );
}
