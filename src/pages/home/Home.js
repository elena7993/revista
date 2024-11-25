import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";

const Wrapper = styled.div`
  width: 100%;
  max-width: 372px;
  height: 100vh;
  background: url("/northern_lights_ealistic.jpg") center no-repeat / cover;
  padding: 0 ${mainStyle.Padding_main};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #dbdbdb;
  margin: 0 auto;
  h2 {
    font-size: 42px;
  }
  p {
    font-size: 18px;
  }
  button {
    all: unset;
    width: 150px;
    height: 50px;
    border: 1px solid #000;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <h2>Revista</h2>
      <p>Here, your dream becomes a story</p>
      <div>
        <button>Start Dreaming</button>
      </div>
    </Wrapper>
  );
};

export default Home;
