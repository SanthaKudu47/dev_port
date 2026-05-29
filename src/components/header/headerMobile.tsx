import { useContext, useState } from "react";
import { ThemeContextDispatchContext } from "../../context/themeContext";
import LightMode from "./icons/lightMode";
import DarkMode from "./icons/darkMode";
import { Logo } from "./icons/logo";

function stylesGenerator(mode = "dark") {
  return {
    color: mode === "dark" ? "bg-dark_primary" : "bg-light_primary",
    borderColor:
      mode === "dark" ? "border-light_primary" : "border-dark_primary",
    toolTipBg: mode === "dark" ? "bg-light_primary" : "bg-dark_primary",
    toolTipText: mode === "dark" ? "text-dark_primary" : "text-light_primary",
  };
}

function HeaderMobile({ theme }: { theme: "dark" | "light" }) {
  const dispatch = useContext(ThemeContextDispatchContext);
  const [visible, setVisibility] = useState<boolean>(false);
  const { color, toolTipBg,toolTipText } = stylesGenerator(theme);

  function changeTheme(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    if (dispatch === null) return;
    dispatch(theme === "dark" ? "light" : "dark");
  } //flex items-end  justify-between  fixed z- fixed right-0  px-4 py-1

  return (
    <div
      className={`h-[62px] w-full ${color} flex items-end justify-between px-4 py-1`}
    >
      {theme === "dark" ? (
        <Logo color1="white" color2="#18191C" />
      ) : (
        <Logo color1="#18191C" color2="white" />
      )}
      <div
        className="flex items-center text-dark_white font-code-font font-normal gap-2 cursor-pointer relative  bg-dark_primary hover:bg-slate-800 rounded-full p-1"
        onClick={changeTheme}
        onMouseEnter={() => {
          setVisibility(true);
        }}
        onMouseLeave={() => {
          setVisibility(false);
        }}
      >
        {theme === "dark" ? <LightMode /> : <DarkMode />}
      </div>

      {visible && (
        <div className="right-0 left-0 max-w-screen-xl mx-auto top-16 hidden md:block absolute">
          <div className="relative flex justify-end mx-6">
            <div
              className={`relative ${toolTipBg} font-code-font text-[16px] rounded-sm p-1 ${toolTipText} flex`}
            >{`changeMode();`}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export { HeaderMobile };
