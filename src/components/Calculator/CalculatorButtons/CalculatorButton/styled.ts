import styled from "styled-components";

type ButtonContainerProps = {
  color?: string;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme, color }) => color || theme.colors.secondary};
  color: ${({ theme }) => theme.colors.tertialy};
  border: none;
  cursor: pointer;
  font-size: ${({theme}) => theme.sizes.md};
  font-family: ${({theme}) => theme.family.orbitron};  

  &:hover {
    opacity: 0.4;
  }
`;
