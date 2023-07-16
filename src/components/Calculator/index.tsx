import React from "react";

import Display from "./Display";
import CalculatorButtons from "./CalculatorButtons";
import * as S from "./styled";

type CalculatorProps = {};

const Calculator: React.FC<CalculatorProps> = () => {
  return (
      <S.CalculatorWrapper id="calculatorSection">
        <S.CalculatorContainer>
          <Display />
          <CalculatorButtons />
        </S.CalculatorContainer>
      </S.CalculatorWrapper>
  );
};

export default Calculator;
