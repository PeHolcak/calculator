import React from "react";

import Calculator from "../../components/Calculator";
import History from "../../components/History";
import ThemeControler from "../../components/ThemeControler";
import HistoryLink from "../../components/HistoryLink";
import * as S from "./styled";
import MobileOnly from "../../components/MobileOnly";
import LanguagePills from "../../components/LanguagePills";

const Dashboard: React.FC = () => {
  return (
    <S.DashboardWrapper>
      <S.ThemeControlerWrapp>
        <ThemeControler />
      </S.ThemeControlerWrapp>
      <MobileOnly>
        <S.HistoryLinkWrapp>
          <HistoryLink />
        </S.HistoryLinkWrapp>
      </MobileOnly>
      <S.LanguagePillsWrapp>
        <LanguagePills />
      </S.LanguagePillsWrapp>
      <History />
      <Calculator />
    </S.DashboardWrapper>
  );
};

export default Dashboard;
