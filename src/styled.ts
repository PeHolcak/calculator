import styled from "styled-components";

export const AppWrapper = styled.div`
  * {
    &::-webkit-scrollbar {
      width: 12px;
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.colors.quaternary};
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({theme}) => theme.colors.primary};
    }
    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => `${theme.colors.quaternary} ${theme.colors.primary}`};
  }
`;
