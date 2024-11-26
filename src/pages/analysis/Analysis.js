import { useLocation, useNavigate } from "react-router-dom";
import DreamBox from "../../components/DreamBox";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { useEffect, useRef, useState } from "react";
import { generateDreamInterpretation } from "../../api";
import SentimentGraph from "../../components/SentimentGraph";

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
        const prompt = `꿈 해석: ${dream} (결과는 한국어로 해석하고  긍정적인 감정과 부정적인 감정을 각각 퍼센트로 반환해주세요.)`;
        const result = await generateDreamInterpretation(prompt);

        const positiveMatch = result.match(/긍정적인 감정.*?(\d+)%/);
        const negativeMatch = result.match(/부정적인 감정:*?(\d+)%/);

        const positiveValue = positiveMatch ? parseInt(positiveMatch[1]) : 0;
        const negativeValue = negativeMatch ? parseInt(negativeMatch[1]) : 0;

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
    <Wrapper>
      <Header text="Analysis" BackBtn={() => navigate(-1)} />
      <div style={{ marginBottom: "10px" }}>Meaning</div>
      <DreamBox value={analysis} isEditable={false} />

      <div style={{ marginTop: "30px" }}>Sentiment</div>
      <SentimentGraph positive={positive} negative={negative} />
    </Wrapper>
  );
};

export default Analysis;
