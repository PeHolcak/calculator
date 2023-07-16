import styled, { keyframes, css } from "styled-components";

export const ThemeControlerWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  height: 64px;
  width: 64px;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

type ColorType = {
  color: string;
};

export const Color = styled.div<ColorType>`
  background-color: ${({ color }) => color};
  width: 100%;
  height: 100%;
`;

export const ThemeControlerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2px;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  border-radius: 50%;
  overflow: hidden;
`;

type ThemePaleteWrapperProps = {
  isOpen?: boolean;
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
`;

const rotateReverse = keyframes`
  from {
    transform: rotate(720deg);
  }
  to {
    transform: rotate(0deg);
  }
`;


export const ThemePaleteWrapper = styled.div<ThemePaleteWrapperProps>`
  width: 100%;
  height: 100%;
  z-index: ${({theme}) => theme.zIndexes.xxl};

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        animation: ${rotate} 0.5s linear;
      `;
    } else if (isOpen === undefined) {
      return null;
    }
    return css`
      animation: ${rotateReverse} 0.5s linear;
    `;
  }}
`;

type AvaiblePaleteWrapperProps = {
  isOpen?: boolean;
};

const slideIn = keyframes`
  from {
    visibility: hidden;
    bottom: 0;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
    bottom: 100%;
  }
`;

const slideOut = keyframes`
  from {
    visibility: visible;
    opacity: 1;
    bottom: 100%;
  }
  to {
    bottom: 0;
    opacity: 0;
    visibility: hidden;
  }
`;

export const AvaiblePaleteWrapper = styled.div<AvaiblePaleteWrapperProps>`
  position: absolute;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  bottom: 0;
  opacity: 0;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        animation: ${slideIn} 0.5s linear forwards;
      `;
    }
    if (isOpen === undefined) {
      return null;
    }
    return css`
      animation: ${slideOut} 0.5s linear forwards;
    `;
  }}
`;
