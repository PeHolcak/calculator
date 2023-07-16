import React from "react";

import * as S from "./styled";

type CalculatorButtonProps = {
  children: string | number;
  color?: string;
  onClick: () => void;
};

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  children,
  color,
  onClick,
}) => {
  return (
    <S.ButtonContainer color={color} onClick={onClick}>
      {children}
    </S.ButtonContainer>
  );
};

export default CalculatorButton;
