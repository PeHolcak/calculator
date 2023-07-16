import styled, { css, keyframes } from "styled-components";

type HistoryLinkWrapperProps = {
  disabled: boolean;
};

const pump = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

export const HistoryLinkWrapper = styled.a<HistoryLinkWrapperProps>`
  position: relative;
  border-radius: 24px;
  height: 48px;
  width: auto;
  min-width: 48px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  padding: 0 12px;
  user-select: none;
  text-decoration: none;

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
          opacity: 0.4;
        `
      : css`
          cursor: pointer;
          opacity: 1;
          animation: ${pump} .6s linear;
          transition-duration: .4s;

          &:hover {
            transform: scale(1.1);
          }
        `}
`;

export const HistoryItemsCount = styled.span`
  color: ${({ theme }) => theme.colors.tertialy};
`;
