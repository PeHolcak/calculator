import { useState } from "react";

import {
  CalculatorValues,
  OperatorValues,
  ValuesType,
  HistoryDataType,
} from ".";

export const useCalculator = () => {
  const [values, setValues] = useState<ValuesType>({
    currentValue: "",
    prevValue: "",
  });

  const [historyData, setHistoryData] = useState<HistoryDataType[]>([]);

  const [operator, setOperator] = useState<OperatorValues | undefined>();

  const addValue = (value: CalculatorValues) => {
    if (values.prevValue && !values.currentValue && !operator) {
      setValues({
        prevValue: "",
        currentValue: value,
      });
    } else {
      setValues((preValues) => ({
        ...preValues,
        currentValue: preValues.currentValue + value,
      }));
    }
  };

  const removeOperatorFromString = (value: string) => {
    if (value.charAt(value.length - 1) in OperatorValues) {
      return values.prevValue;
    }
    return value;
  };

  const getValues = () => {
    const firstValue = parseInt(values.currentValue) || 0;
    const secondValue =
      parseInt(removeOperatorFromString(values.prevValue)) || 0;

    return { firstValue, secondValue };
  };

  const summarize = () => {
    const { firstValue, secondValue } = getValues();
    switch (operator) {
      case "/":
        return secondValue / firstValue;
      case "*":
        return secondValue * firstValue;
      case "+":
        return secondValue + firstValue;
      default:
        return secondValue - firstValue;
    }
  };

  const setResult = () => {
    const result = summarize();
    setValues({
      prevValue: result.toString(),
      currentValue: "",
    });
  };

  const addOperator = (value: OperatorValues) => {
    if (values.currentValue) {
      if (values.prevValue) {
        setResult();
      } else {
        setValues((preValues) => ({
          prevValue: preValues.currentValue,
          currentValue: "",
        }));
      }
      setOperator(value);
    } else {
      setValues((preValues) => ({
        prevValue: preValues.prevValue,
        currentValue: "",
      }));
      setOperator(value);
    }
  };

  const removeLastValue = () => {
    if (operator && !values.currentValue) {
      setOperator(undefined);
    } else if (values.currentValue) {
      setValues((preValues) => ({
        ...preValues,
        currentValue: preValues.currentValue
          ? preValues.currentValue.slice(0, -1)
          : "",
      }));
    } else if (!operator && !values.currentValue && values.prevValue) {
      setValues({
        prevValue: "",
        currentValue: "",
      });
    }
  };

  const reset = () => {
    setValues({
      prevValue: "",
      currentValue: "",
    });
    setOperator(undefined);
  };

  const getInvertNumber = (value: number) => {
    return (-value).toString();
  };

  const invertValue = () => {
    const { firstValue, secondValue } = getValues();
    if (firstValue) {
      setValues((preValues) => ({
        ...preValues,
        currentValue: getInvertNumber(firstValue),
      }));
    } else if (secondValue) {
      setValues((preValues) => ({
        ...preValues,
        prevValue: `${getInvertNumber(secondValue)}`,
      }));
    }
  };

  const showResult = () => {
    if (operator && values.currentValue) {
      setHistoryData((prevHistoryData) => [
        ...prevHistoryData,
        {
          prevValue: values.prevValue,
          currentValue: values.currentValue,
          operator,
        },
      ]);
      setResult();
      setOperator(undefined);
    }
  };

  const setData = (
    operator: OperatorValues,
    currentValue: string,
    prevValue: string
  ) => {
    setValues({
      prevValue,
      currentValue,
    });
    setOperator(operator);
  };

  return {
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
  };
};
