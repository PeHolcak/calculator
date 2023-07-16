import { useState } from "react";
import { ColorTheme } from "../../styles/theme";
import { ColorPalete } from "../../styles/colors";
import { defaultColorTheme } from "../../styles/colors";

const getActiveTheme = () => {
  const theme = localStorage.getItem("theme") || "";
  try {
    return JSON.parse(theme) as ColorTheme;
  } catch (e) {
    console.error("uložené theme se nepovedlo načíst", e);
    return defaultColorTheme;
  }
};

const getActiveThemeName = () => {
  return (localStorage.getItem("themeName") || "") as ColorPalete;
};

const useThemeContext = () => {
  const [activeTheme, setActiveTheme] = useState<ColorTheme>(
    getActiveTheme() || defaultColorTheme
  );

  const [activeThemeName, setActiveThemeName] = useState<ColorPalete>(
    getActiveThemeName() || ColorPalete.defaultColorTheme
  );

  const onActiveThemeChange = (
    newActiveTheme: ColorTheme,
    newActiveThemeName: ColorPalete
  ) => {
    setActiveTheme(newActiveTheme);
    setActiveThemeName(newActiveThemeName);
    localStorage.setItem("theme", JSON.stringify(newActiveTheme));
    localStorage.setItem("themeName", newActiveThemeName);
  };

  return {
    getActiveThemeName,
    onActiveThemeChange,
    activeTheme,
    activeThemeName,
  };
};

export default useThemeContext;
