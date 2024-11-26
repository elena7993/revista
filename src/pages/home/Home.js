import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  max-width: 372px;
  height: 100vh;
  min-height: 812px;
  padding: 0 ${mainStyle.Padding_main};
  background: url("${process.env.PUBLIC_URL}/northernlights_realistic.jpg")
    center / cover no-repeat;
  /* background-color: lightblue; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #dbdbdb;
  margin: 0 auto;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 42px;
    }
    p {
      font-size: 18px;
    }
  }
  button {
    all: unset;
    width: 150px;
    height: 50px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/enterdream");
  };

  return (
    <Wrapper>
      <div className="title">
        <h2>Revista</h2>
        <p>Here, your dream becomes a story</p>
      </div>

      <div>
        <button onClick={handleClick}>Start Dreaming</button>
      </div>
    </Wrapper>
  );
};

export default Home;
