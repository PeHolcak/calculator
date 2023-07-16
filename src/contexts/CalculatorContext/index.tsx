import { createContext } from "react";

import { useCalculator } from "./useCalculator";

export enum CalculatorValues {
  one = "1",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  zero = "0",
}

export enum OperatorValues {
  divide = "/",
  mal = "*",
  plus = "+",
  minus = "-",
}

type CalculatorContextType = {
  addValue: (value: CalculatorValues) => void;
  values: {
    currentValue?: string;
    prevValue?: string;
  };
  operator?: OperatorValues,
  addOperator: (value: OperatorValues) => void;
  removeLastValue: () => void;
  reset: () => void;
  invertValue: () => void;
  showResult: () => void;
  historyData: HistoryDataType[];
  setData: (
    operator: OperatorValues,
    currentValue: string,
    prevValue: string
  ) => void;
};
export const CalculatorContext = createContext<CalculatorContextType>({
  addValue: () => {},
  values: {
    currentValue: "",
    prevValue: "",
  },
  addOperator: () => {},
  removeLastValue: () => {},
  reset: () => {},
  invertValue: () => {},
  showResult: () => {},
  historyData: [],
  setData: () => {},
});

type CalculatorContexProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export type ValuesType = {
  currentValue: string;
  prevValue: string;
};

export type HistoryDataType = ValuesType & {
  operator: OperatorValues;
};

const CalculatorContexProvider: React.FC<CalculatorContexProviderProps> = ({
  children,
}) => {
  const {
    addValue,
    values,
    operator,
    removeLastValue,
    addOperator,
    reset,
    invertValue,
    showResult,
    historyData,
    setData,
  } = useCalculator();

  return (
    <CalculatorContext.Provider
      value={{
        addValue,
        values,
        operator,
        removeLastValue,
        addOperator,
        reset,
        invertValue,
        showResult,
        historyData,
        setData,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContexProvider;
