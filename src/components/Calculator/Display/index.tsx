import React, { useContext } from "react";

import { CalculatorContext } from "../../../contexts/CalculatorContext";
import * as S from "./styled";

type DisplayProps = {};

const Display: React.FC<DisplayProps> = () => {
  const { values, operator } = useContext(CalculatorContext);
  return (
    <S.DisplayWrapper>
      <S.DisplayContainer>
        <S.DisplayContainerInner>
          <S.DisplayedText>
          <S.PrevValue>
            {`${values.prevValue}${operator ?? ""}`}
          </S.PrevValue>
          <S.CurrentValue>
            {values.currentValue}
            </S.CurrentValue>
          </S.DisplayedText>
        </S.DisplayContainerInner>
      </S.DisplayContainer>
    </S.DisplayWrapper>
  );
};

export default Display;
