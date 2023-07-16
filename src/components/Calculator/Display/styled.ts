import styled, {css} from "styled-components";

export const DisplayWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.quaternary};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
`;

export const DisplayContainer = styled.div`
  margin: 8px;
`;

export const DisplayContainerInner = styled.div`
position: relative;
  background-color: ${({ theme }) => theme.colors.tertialy};
  padding: 0 8px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

export const DisplayedText = styled.div`
  height: 104px;
  font-size: ${({theme}) => theme.sizes.md};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.2rem;
`;

const displayValuesScrollbar = css`
  max-width: calc(100% - 16px);
  overflow: auto;
  margin: 0 8px;

  &::-webkit-scrollbar {
    height: 4px;
    border-radius: 2px;
  }
`

export const PrevValue = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: ${({theme}) => theme.sizes.lg};
  ${displayValuesScrollbar};
  font-family: ${({theme}) => theme.family.orbitron};  
`;

export const CurrentValue = styled.span`
  position: absolute;
  bottom: 4px; 
  right: 0;
  font-size: ${({theme}) => theme.sizes.xl};
  ${displayValuesScrollbar};
  font-family: ${({theme}) => theme.family.orbitron};  
`;
