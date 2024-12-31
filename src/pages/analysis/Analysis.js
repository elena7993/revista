import { useLocation, useNavigate } from "react-router-dom";
import DreamBox from "../../components/DreamBox";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { useEffect, useRef, useState } from "react";
import { generateDreamInterpretation } from "../../api";
import SentimentGraph from "../../components/SentimentGraph";
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  width: 344px;
  height: 57px;
  background-color: #00b9c6;
  border-radius: 15px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -1;
  position: absolute;
  bottom: 30px;
  left: 18px;
  cursor: pointer;
`;

const Analysis = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dream = location.state?.dream || "No dream interpretation provided";

  const [analysis, setAnalysis] = useState("Analyzing your dream...");
  const [isFetching, setIsFetching] = useState(false);
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);

  const isFetchingRef = useRef(false);

  useEffect(() => {
    const fetchAnalysis = async () => {
      if (isFetchingRef.current) return;

      isFetchingRef.current = true;

      try {
        const prompt = `꿈 해석: ${dream} (결과는 한국어로 해석하고 긍정적인 감정과 부정적인 감정을 각각 퍼센트로 반환해주세요. 이 때 예를들어 긍정적인 감정: 60%, 부정적인 감정: 40% 이런식으로 나타내주세요`;
        const result = await generateDreamInterpretation(prompt);

        const positiveMatch = result.match(/긍정적인 감정:\s*(\d+)%/);
        const negativeMatch = result.match(/부정적인 감정:\s*(\d+)%/);

        const positiveValue = positiveMatch
          ? parseInt(positiveMatch[1], 10)
          : 0;
        const negativeValue = negativeMatch
          ? parseInt(negativeMatch[1], 10)
          : 0;

        console.log(
          "Positive Value:",
          positiveValue,
          "Negative Value:",
          negativeValue
        );

        setPositive(positiveValue);
        setNegative(negativeValue);

        setAnalysis(result);
      } catch (error) {
        setAnalysis("꿈 해석에 실패했습니다. 다시 시도하세요!");
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchAnalysis();
  }, [dream]);

  return (
    <Wrapper style={{ position: "relative" }}>
      <Header text="Analysis" BackBtn={() => navigate(-1)} />
      <div style={{ marginBottom: "15px", fontWeight: "600" }}>Meaning</div>
      <DreamBox value={analysis} isEditable={false} />

      <div style={{ marginTop: "30px", fontWeight: "600" }}>Sentiment</div>
      <SentimentGraph positive={positive} negative={negative} />
      <Button onClick={() => navigate("/enterdream")}>Retry</Button>
    </Wrapper>
  );
};

export default Analysis;
