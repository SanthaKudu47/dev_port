import { useContext } from "react";
import {
  ThemeContextDispatchContext,
} from "../../context/themeContext";
import LightMode from "./icons/lightMode";
import DarkMode from "./icons/darkMode";
import { Logo } from "./icons/logo";

function stylesGenerator(mode = "dark") {
  return {
    color: mode === "dark" ? "bg-dark_primary" : "bg-light_primary",
    borderColor:
      mode === "dark" ? "border-light_primary" : "border-dark_primary",
  };
}

function HeaderMobile({ theme }: { theme: "dark" | "light" }) {
  const dispatch = useContext(ThemeContextDispatchContext);
  const { color, borderColor } = stylesGenerator(theme);

  function changeTheme(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    event.stopPropagation();
    if (dispatch === null) return;
    dispatch(theme === "dark" ? "light" : "dark");
  }

  return (
    <div
      className={`h-[62px] w-full ${color} flex items-end  justify-between text-red-400 fixed z-10  px-4 py-1`}
    >
      {theme === "dark" ? (
        <Logo color1="white" color2="#18191C" />
      ) : (
        <Logo color1="#18191C" color2="white" />
      )}
      <div
        className="flex items-center text-dark_white font-code-font font-normal gap-2 cursor-pointer relative  bg-dark_primary hover:bg-slate-800 rounded-full p-1"
        onClick={changeTheme}
      >
        {theme === "dark" ? <LightMode /> : <DarkMode />}
      </div>
    </div>
  );
}

export { HeaderMobile };
