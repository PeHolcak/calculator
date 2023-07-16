import React from "react";
import ColorizeIcon from "@mui/icons-material/Colorize";

import * as S from "./styled";

type CustomThemeIconProps = { onClick: () => void };

const CustomThemeIcon: React.FC<CustomThemeIconProps> = ({
  onClick,
}) => {
  return (
    <S.ColorizeIconWrapper onClick={onClick}>
      <ColorizeIcon />
    </S.ColorizeIconWrapper>
  );
};

export default CustomThemeIcon;
