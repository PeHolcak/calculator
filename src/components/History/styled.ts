import styled from "styled-components";
import { devices } from "../../styles/medias";

type HistoryWrapperProps = {
  historyDataLength: number;
};

export const HistoryWrapper = styled.div<HistoryWrapperProps>`
  padding: 16px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.tertialy};
  min-width: 240px;
  min-height: calc(100vh - 16px - 16px); // 100vh - paddingTop - paddingBottom
  display: ${({ historyDataLength }) =>
    Boolean(historyDataLength) ? "flex" : "none"};
  flex-direction: column;
  align-items: center;
  max-height: calc(100vh - 16px - 16px);

  @media only screen and (${devices.md}) {
    display: flex;
  }
`;

export const HistoryItemsWrapper = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const HistoryItem = styled.li`
  text-align: center;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertialy};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.quaternary};
  }
`;

export const HistoryItemLink = styled.a`
  display: block;
  cursor: pointer;
  padding: 12px;
  width: calc(100% - 24px);
  color: ${({ theme }) => theme.colors.tertialy};
  text-decoration: none;
`;

export const HistoryFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Count = styled.span`
  padding-top: 16px;
  
  font-weight:${({ theme }) => theme.weight.xs};
`;

export const HistoryCount = styled.span<{ children?: any }>`
  color: ${({ children, theme }) => children[0] === "0" ? theme.colors.tertialy : theme.colors.primary};
`;

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-weight:${({ theme }) => theme.weight.lg};
`;
