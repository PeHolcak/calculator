import { useContext } from "react";
import { ThemeContext } from "styled-components";

import {
  CalculatorValues,
  CalculatorContext,
  OperatorValues
} from "../../../contexts/CalculatorContext";

const useButtons = () => {
  const themeData = useContext(ThemeContext);
  const { addValue, removeLastValue, addOperator, reset, invertValue, showResult } = useContext(CalculatorContext);

  const buttonsData = [
    {
      name: "AC",
      label: "AC",
      value: "AC",
      color: themeData?.colors.secondary,
      onClick: reset,
    },
    {
      name: "remove",
      label: "<-",
      value: "remove",
      color: themeData?.colors.secondary,
      onClick: removeLastValue,
    },
    {
      name: "invert",
      label: "+/-",
      value: "invert",
      color: themeData?.colors.secondary,
      onClick: invertValue,
    },
    {
      name: "divide",
      label: "/",
      value: "divide",
      color: themeData?.colors.secondary,
      onClick: () => addOperator(OperatorValues.divide),
    },
    {
      name: "1",
      label: "1",
      value: CalculatorValues.one,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.one),
    },
    {
      name: "2",
      label: "2",
      value: CalculatorValues.two,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.two),
    },
    {
      name: "3",
      label: "3",
      value: CalculatorValues.three,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.three),
    },
    {
      name: "mal",
      label: "×",
      value: "mal",
      color: themeData?.colors.secondary,
      onClick: () => addOperator(OperatorValues.mal),
    },
    {
      name: "4",
      label: "4",
      value: CalculatorValues.four,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.four),
    },
    {
      name: "5",
      label: "5",
      value: CalculatorValues.five,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.five),
    },
    {
      name: "6",
      label: "6",
      value: CalculatorValues.six,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.six),
    },
    {
      name: "minus",
      label: "-",
      value: "minus",
      color: themeData?.colors.secondary,
      onClick: () =>  addOperator(OperatorValues.minus),
    },
    {
      name: "7",
      label: "7",
      value: CalculatorValues.seven,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.seven),
    },
    {
      name: "8",
      label: "8",
      value: CalculatorValues.eight,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.eight),
    },
    {
      name: "9",
      label: "9",
      value: CalculatorValues.nine,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.nine),
    },
    {
      name: "plus",
      label: "+",
      value: "plus",
      color: themeData?.colors.secondary,
      onClick: () =>  addOperator(OperatorValues.plus),
    },
    {
      name: "0",
      label: "0",
      value: CalculatorValues.zero,
      color: themeData?.colors.quaternary,
      onClick: () => addValue(CalculatorValues.zero),
      size: 2,
    },
    {
      name: "dot",
      label: ".",
      value: "dot",
      color: themeData?.colors.secondary,
      onClick: () => {},
    },
    {
      name: "equals",
      label: "=",
      value: "equals",
      color: themeData?.colors.primary,
      onClick: showResult,
    },
  ];
  return { data: buttonsData };
};

export default useButtons;
