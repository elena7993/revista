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
      font-size: 48px;
      font-family: "Pacifico", cursive;
      font-weight: 400;
      font-style: normal;
    }
    p {
      font-size: 26px;
      font-family: "Dancing Script", cursive;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;
      margin-top: 20px;
    }
  }
  button {
    all: unset;
    width: 170px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 55px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    margin-bottom: 150px;
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
