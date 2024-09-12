import styled from "styled-components";
import { breakpoints } from "../../Global";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 80px;
  margin-bottom: 120px;
  gap: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
