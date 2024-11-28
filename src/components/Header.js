import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const HeaderWrap = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    text-align: center;
    flex: 1;
  }
`;

const Header = ({ text, BackBtn }) => {
  return (
    <HeaderWrap>
      <FontAwesomeIcon
        icon={faAngleLeft}
        style={{ cursor: "pointer" }}
        onClick={BackBtn}
      />
      <h3 style={{ fontSize: "18px" }}>{text}</h3>
    </HeaderWrap>
  );
};

export default Header;
