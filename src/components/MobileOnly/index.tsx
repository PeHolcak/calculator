import React from "react";

import * as S from "./styled";

type MobileOnlyProps = {
  children: React.ReactNode;
};

const MobileOnly: React.FC<MobileOnlyProps> = ({ children }) => {
  return (
    <S.MobileOnlyWrapper>
      {children}
    </S.MobileOnlyWrapper>
  );
};

export default MobileOnly;
