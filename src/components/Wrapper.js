import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Wrapper = styled.div`
  width: 100%;
  max-width: 440px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px ${mainStyle.Padding_main};
  background-color: #002949;
  margin: 0 auto;
`;

export default Wrapper;
