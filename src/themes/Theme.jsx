import React from "react";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

const ThemeContext = React.createContext({
  toggleTheme: () => {},
  isDark: false,
});

const ThemeProviderWrapper = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const initialTheme = prefersDarkMode ? darkTheme : lightTheme;
  const [theme, setTheme] = useState(initialTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
    setIsDarkTheme((prevState) => !prevState);
  };
  const appliedTheme = createTheme(theme);
  const contextValue = {
    toggleTheme: toggleTheme,
    isDark: isDarkTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProviderWrapper, ThemeContext };
