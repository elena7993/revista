import DreamBox from "../../components/DreamBox";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";

const Analysis = () => {
  return (
    <Wrapper>
      <Header />
      <div style={{ marginBottom: "10px" }}>Meaning</div>
      <DreamBox />

      <div style={{ marginTop: "30px" }}>Sentiment</div>
    </Wrapper>
  );
};

export default Analysis;
