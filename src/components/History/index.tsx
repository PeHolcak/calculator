import React, { useContext } from "react";
import { useTranslation, Trans } from "react-i18next";

import { CalculatorContext } from "../../contexts/CalculatorContext";
import { HistoryDataType } from "../../contexts/CalculatorContext";
import { NS } from "../../localize/i18n";
import * as S from "./styled";

type HistoryProps = {};

const History: React.FC<HistoryProps> = () => {
  const { historyData, setData } = useContext(CalculatorContext);
  const { t } = useTranslation(NS.dashboard);

  const onHistoryItemLinkClickHandle = (historyItem: HistoryDataType) => {
    setData(
      historyItem.operator,
      historyItem.currentValue,
      historyItem.prevValue
    );
  };

  return (
    <S.HistoryWrapper
      id="historySection"
      historyDataLength={historyData.length}
    >
      <S.Header>{t("history.title")}</S.Header>
      <S.HistoryItemsWrapper>
        {historyData.map((historyItem) => (
          <S.HistoryItem>
            <S.HistoryItemLink
              href="/#calculatorSection"
              onClick={() => onHistoryItemLinkClickHandle(historyItem)}
            >
              {`${historyItem.prevValue} ${historyItem.operator} ${historyItem.currentValue}`}
            </S.HistoryItemLink>
          </S.HistoryItem>
        ))}
      </S.HistoryItemsWrapper>
      <S.HistoryFooter>
        <S.Count>
          {
            <Trans t={t} components={[<S.HistoryCount />]}>
              {t("history.recordsCount", {
                historyDataLength: historyData.length,
              }) ?? ""}
            </Trans>
          }
        </S.Count>
      </S.HistoryFooter>
    </S.HistoryWrapper>
  );
};

export default History;
