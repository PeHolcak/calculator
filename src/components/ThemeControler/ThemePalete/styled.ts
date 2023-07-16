import styled from "styled-components";

type ColorType = {
  color: string
}

export const Color = styled.div<ColorType>`
  background-color: ${({color}) => color};
  width: 100%;
  height: 100%;
`

export const ThemePaleteWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2px;
  height: calc(100% - 4px);
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition-duration: .4s;
  &:hover {
    /* opacity: 0.7; */
    transform: scale(1.08);
  }
`
