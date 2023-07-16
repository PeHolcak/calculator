import React, { useContext, useState, useMemo, useCallback } from "react";

import { CustomThemeContext } from "../../contexts/CustomThemeContext";
import ThemePalete from "./ThemePalete";
import theme from "../../styles/theme";
import { ColorTheme } from "../../styles/theme";
import { ColorPalete } from "../../styles/colors";

export const useThemeControler = () => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>();
  const { changeColorSetting, activeThemeName, activeTheme, setCustomTheme } =
    useContext(CustomThemeContext);
  const onThemeMenuToggleHandler = () => {
    setIsOpen((v) => !v);
  };

  const setNewTheme = useCallback(
    (themeName: string) => {
      setIsOpen(false);
      changeColorSetting(themeName as ColorPalete);
    },
    [changeColorSetting]
  );

  const getThemePalete = (onClickHandler: () => void, colors?: ColorTheme) => {
    return <ThemePalete colors={colors} onClick={onClickHandler} />;
  };

  const colorThemeEntries = useMemo(() => {
    let themeEntries = Object.entries(theme.colorsTheme).reduce(
      (
        result: { active: React.ReactNode[]; avaible: React.ReactNode[] },
        colorTheme
      ) => {
        const themeName = colorTheme[0];
        if (colorTheme[0] === activeThemeName) {
          result.active.push(
            getThemePalete(onThemeMenuToggleHandler, colorTheme[1])
          );
          return result;
        }
        result.avaible.push(
          getThemePalete(() => setNewTheme(themeName), colorTheme[1])
        );
        return result;
      },
      {
        active: [],
        avaible: [],
      }
    );
    if (!themeEntries.active.length) {
      themeEntries.active.push(
        getThemePalete(onThemeMenuToggleHandler, activeTheme)
      );
    }
    return themeEntries;
  }, [activeTheme, activeThemeName, setNewTheme]);

  return { isOpen, colorThemeEntries, setCustomTheme };
};
