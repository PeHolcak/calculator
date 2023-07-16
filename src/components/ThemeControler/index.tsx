import React, { useState } from "react";

import { ColorTheme } from "../../styles/theme";
import * as S from "./styled";
import { useThemeControler } from "./useThemeControler";
import ColorizeModal from "./ColorizeModal";
import CustomThemeIcon from "./ColorizeIcon";

type ThemeControlerProps = {};

const ThemeControler: React.FC<ThemeControlerProps> = () => {
  const { isOpen, colorThemeEntries, setCustomTheme } = useThemeControler();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onColorizeIconClickHandler = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onModalFinishHandler = (themeData: ColorTheme) => {
    setCustomTheme(themeData);
    closeModal();
  };

  return (
    <S.ThemeControlerWrapper>
      <S.AvaiblePaleteWrapper isOpen={isOpen}>
        <CustomThemeIcon onClick={onColorizeIconClickHandler} />
        {colorThemeEntries.avaible}
      </S.AvaiblePaleteWrapper>
      <S.ThemePaleteWrapper isOpen={isOpen}>
        {colorThemeEntries.active}
      </S.ThemePaleteWrapper>
      {isModalOpen ? (
        <ColorizeModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          onModalFinishHandler={onModalFinishHandler}
        />
      ) : null}
    </S.ThemeControlerWrapper>
  );
};

export default ThemeControler;
