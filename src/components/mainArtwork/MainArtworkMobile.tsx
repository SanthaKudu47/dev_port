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
    <div className="relative min-w-[350px] mt-[67px] ">
      <div className="z-0 relative">
        <Editor trigger={trigger} theme={theme} />
      </div>
      <div className="w-full -mt-10 relative min-w-[350px]">
        <BrowserUi step={step} theme={theme} />
      </div>
    </div>
  );
}
