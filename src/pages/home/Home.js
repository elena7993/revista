import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  max-width: 440px;
  height: 100%;
  min-height: 100vh;
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
  position: relative;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
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

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.7;
      transform: scale(1);
    }

    50% {
      opacity: 1;
      transform: scale(1.3);
    }
  }

  .star {
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 10px;
    filter: blur(0.8px);
    animation: twinkle 2s infinite ease-in-out;
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
    margin-top: 100px;
    cursor: pointer;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/enterdream");
  };

  return (
    <Wrap>
      <div className="title">
        <h2>Revista</h2>
        <p>Here, your dream becomes a story</p>
      </div>
      <div>
        <button onClick={handleClick}>Start Dreaming</button>
      </div>
      <div className="stars">
        <div
          className="star"
          style={{ position: "absolute", top: "10%", left: "30%" }}
        ></div>
        <div
          className="star"
          style={{ position: "absolute", top: "42%", left: "50%" }}
        ></div>
        <div
          className="star"
          style={{ position: "absolute", top: "50%", right: "10%" }}
        ></div>
        <div
          className="star"
          style={{ position: "absolute", top: "60%", left: "20%" }}
        ></div>
      </div>
    </Wrap>
  );
};

export default Home;
