import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(4, 1fr);
  padding: 0px 8px 8px;
`;

type ButtonWrapProps = {
    size?: number
}

export const ButtonWrap = styled.div<ButtonWrapProps>`
    grid-column-end: span ${({size}) => size === undefined ? 1 : size};
`