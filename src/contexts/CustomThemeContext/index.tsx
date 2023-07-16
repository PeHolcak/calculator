import { createContext, useState, useEffect, useMemo } from "react";
import { ThemeContext } from "styled-components";

import { ColorPalete } from "../../styles/colors";
import useThemeContext from "./useThemeContext";
import themeSettings from "../../styles/theme";
import { ColorTheme } from "../../styles/theme";
import { defaultColorTheme } from "../../styles/colors";

type CustomThemeContextType = {
  changeColorSetting: (palete: ColorPalete) => void;
  activeTheme: ColorTheme;
  activeThemeName: ColorPalete,
  setCustomTheme: (newTheme: ColorTheme) => void
};
export const CustomThemeContext = createContext<CustomThemeContextType>({
  changeColorSetting: () => {},
  activeTheme: defaultColorTheme,
  activeThemeName: ColorPalete.defaultColorTheme,
  setCustomTheme: () => {},
});

type CustomThemeContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const CustomThemeContextProvider: React.FC<CustomThemeContextProviderProps> = ({
  children,
}) => {
  const { onActiveThemeChange, activeTheme, activeThemeName } = useThemeContext();

  const actualTheme = useMemo(
    () => ({
      ...themeSettings.theme,
      colors: activeTheme,
    }),
    [activeTheme]
  );

  const changeColorSetting = (palete: ColorPalete) => {
    onActiveThemeChange(themeSettings.colorsTheme[palete] || defaultColorTheme, palete);
  };

  const setCustomTheme = (newTheme: ColorTheme)=>{
    onActiveThemeChange(newTheme, ColorPalete.customTheme)
  }

  return (
    <CustomThemeContext.Provider
      value={{
        changeColorSetting,
        activeTheme,
        activeThemeName,
        setCustomTheme
      }}
    >
      <ThemeContext.Provider value={actualTheme}>
        {children}
      </ThemeContext.Provider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeContextProvider;
