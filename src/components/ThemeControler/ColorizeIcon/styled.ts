import styled from "styled-components";


export const ColorizeIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.quaternary};
  color: ${({theme}) => theme.colors.tertialy};
  cursor: pointer;
`

export const ColorizeIconContainer = styled.div`
  background-color: white;
  border-radius: 50%;
`