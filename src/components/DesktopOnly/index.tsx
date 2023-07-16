import React from "react";

import * as S from "./styled";

type DesktopOnlyProps = {
  children: React.ReactNode
};

const DesktopOnly: React.FC<DesktopOnlyProps> = ({children}) => {
 
  return (
    <S.DesktopOnlyWrapper>
      {children}
    </S.DesktopOnlyWrapper>
  );
};

export default DesktopOnly;
