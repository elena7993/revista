import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";

const Wrapper = styled.div`
  width: 100%;
  max-width: 372px;
  height: 100vh;
  padding: 0 ${mainStyle.Padding_main};
  background: url("/northernlights_realistic.jpg") center no-repeat / cover;
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
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <div className="title">
        <h2>Revista</h2>
        <p>Here, your dream becomes a story</p>
      </div>

      <div>
        <button>Start Dreaming</button>
      </div>
    </Wrapper>
  );
};

export default Home;
