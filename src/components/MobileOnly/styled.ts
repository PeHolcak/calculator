import styled from "styled-components";

import { devices } from "../../styles/medias";

export const MobileOnlyWrapper = styled.div`
  display: block;
  @media only screen and (${devices.md}) {
    display: none;
  }
`;
