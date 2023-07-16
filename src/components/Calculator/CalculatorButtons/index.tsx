import React, { useMemo } from "react";

import useButtons from "./useButtons";
import CalculatorButton from "./CalculatorButton";
import * as S from "./styled";

type CalculatorButtonsProps = {};

const CalculatorButtons: React.FC<CalculatorButtonsProps> = () => {
  const { data } = useButtons();

  const buttons = useMemo(
    () =>
      data.map((button) => (
        <S.ButtonWrap size={button.size}>
          <CalculatorButton onClick={button.onClick} color={button.color}>
            {button.label}
          </CalculatorButton>
        </S.ButtonWrap>
      )),
    [data]
  );

  return <S.ButtonsContainer>{buttons}</S.ButtonsContainer>;
};

export default CalculatorButtons;
