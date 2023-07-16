import styled from "styled-components";
import { devices } from "../../styles/medias";

export const DashboardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  flex-direction: column-reverse;
  width: 100%;
  @media only screen and (${devices.md}) {
    flex-direction: row;
  }
`;

export const ThemeControlerWrapp = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

export const HistoryLinkWrapp = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: ${({theme}) => theme.zIndexes.xxl};
`;

export const LanguagePillsWrapp = styled.div`
  position: fixed;
  top: 24px;
  right: 16px;
`