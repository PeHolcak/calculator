import { useContext, useMemo } from "react";

import { CalculatorContext } from "../../contexts/CalculatorContext";

const useHistoryLink = () => {
  const { historyData } = useContext(CalculatorContext);

  const historyDataLenght = useMemo(
    () => historyData.length,
    [historyData.length]
  );

  const isDisabled = useMemo(() => !historyDataLenght, [historyDataLenght]);

  return { historyDataLenght, isDisabled };
};

export default useHistoryLink;
