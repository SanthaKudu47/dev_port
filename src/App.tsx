import Main from "./components/main/Main";
import {
  ThemeContext,
  ThemeContextDispatchContext,
} from "./context/themeContext";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  return (
    <ThemeContext.Provider value={mode}>
      <ThemeContextDispatchContext.Provider value={setMode}>
        <Main />
      </ThemeContextDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
