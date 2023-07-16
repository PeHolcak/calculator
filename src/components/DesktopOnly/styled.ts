import styled from "styled-components";
import { devices } from "../../styles/medias";

export const DesktopOnlyWrapper = styled.div`
  display: none;
  @media only screen and (${devices.md}) {
    display: block;
  }
`;