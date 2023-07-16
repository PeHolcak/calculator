import React, { useMemo } from "react";

import { ColorTheme } from "../../../styles/theme";

import * as S from "./styled";

type ThemePaleteProps = {
  colors?: ColorTheme
  onClick?: () => void
};

const ThemePalete: React.FC<ThemePaleteProps> = ({colors, onClick}) => {

  const colorsArray = useMemo(
    () => Object.values(colors || {}),
    [colors]
  );

  return (
    <S.ThemePaleteWrapper onClick={onClick}>
      {colorsArray.map((color) => (
        <S.Color color={color} />
      ))}
    </S.ThemePaleteWrapper>
  );
};

export default ThemePalete;
