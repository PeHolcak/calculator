import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import * as S from "./styled";

type LanguagePillsProps = {};

const LanguagePills: React.FC<LanguagePillsProps> = () => {
  const { i18n } = useTranslation();

  const activeLanguage = useMemo(() => i18n.language, [i18n.language]);
  const isCzech = useMemo(() => activeLanguage === "cs", [activeLanguage]);

  const onLaguageChange = () => {
    i18n.changeLanguage(isCzech ? "en" : "cs");
  };

  return (
    <S.LanguagePillsWrapper onClick={onLaguageChange}>
      <S.SwitchDot position={isCzech ? "left" : "right"}>
        {isCzech ? "CS" : "EN"}
      </S.SwitchDot>
    </S.LanguagePillsWrapper>
  );
};

export default LanguagePills;
