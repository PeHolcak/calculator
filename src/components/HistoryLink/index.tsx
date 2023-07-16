import React from "react";
import HistoryIcon from "@mui/icons-material/History";

import * as S from "./styled";
import useHistoryLink from "./useHistoryLink";

type HistoryLinkProps = {};

const HistoryLink: React.FC<HistoryLinkProps> = () => {
  const { historyDataLenght, isDisabled } = useHistoryLink();

  return (
    <S.HistoryLinkWrapper
      disabled={isDisabled}
      key={`history_button_${historyDataLenght}`}
      href={isDisabled ? undefined : "/#historySection"}
    >
      <HistoryIcon />
      <S.HistoryItemsCount>{historyDataLenght}</S.HistoryItemsCount>
    </S.HistoryLinkWrapper>
  );
};

export default HistoryLink;
