import { useLocation, useNavigate } from "react-router-dom";
import DreamBox from "../../components/DreamBox";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { useEffect, useRef, useState } from "react";
import { generateDreamInterpretation } from "../../api";

const Analysis = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dream = location.state?.dream || "No dream interpretation provided";

  const [analysis, setAnalysis] = useState("Analyzing your dream...");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchAnalysis = async () => {
      if (isFetching) return;

      setIsFetching(true);

      try {
        const prompt = `꿈 해석: ${dream} (결과는 한국어로 해석해주세요.)`;
        const result = await generateDreamInterpretation(prompt);
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
    </Wrapper>
  );
};

export default Analysis;
