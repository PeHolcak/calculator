import styled, { css } from "styled-components";

type SwitchDotProps = {
  position: "left" | "right";
};

export const LanguagePillsWrapper = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  height: 32px;
  width: 56px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const SwitchDot = styled.span<SwitchDotProps>`
  position: absolute;
  transition-duration: .4s;

  ${({ position }) =>
    position === "left"
      ? css`
          left: 0;
        `
      : css`
          left: calc(100% - 32px);
        `}

  display: block;
  height: calc(100% - 8px);
  border-radius: 50%;
  aspect-ratio: 1;
  margin: 4px;
  background-color: ${({ theme }) => theme.colors.tertialy};
  font-size: 8px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
