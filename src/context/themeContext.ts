import { createContext } from "react";
const ThemeContext = createContext<"dark" | "light">("dark");
const ThemeContextDispatchContext = createContext<React.Dispatch<
  React.SetStateAction<"dark" | "light">
> | null>(null);
export { ThemeContext, ThemeContextDispatchContext };
