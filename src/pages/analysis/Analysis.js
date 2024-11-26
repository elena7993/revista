import { useLocation, useNavigate } from "react-router-dom";
import DreamBox from "../../components/DreamBox";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import { useEffect, useState } from "react";
import { generateDreamInterpretation } from "../../api";

const Analysis = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dream = location.state?.dream || "No dream interpretation provided";

  const [analysis, setAnalysis] = useState("Analyzing your dream...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const prompt = `Dream Interpretation: ${dream}`;
        const result = await generateDreamInterpretation(prompt);
        // console.log(result);
        setAnalysis(result); // 해석 결과 저장
      } catch (error) {
        setAnalysis("Failed to analyze your dream. Please try again later.");
        console.error(error);
      }
    };

    fetchAnalysis();
  }, [dream]);

  return (
    <Wrapper>
      <Header text="Analysis" BackBtn={() => navigate(-1)} />
      <div style={{ marginBottom: "10px" }}>Meaning</div>
      <DreamBox value={loading ? "Loading..." : analysis} isEditable={false} />

      <div style={{ marginTop: "30px" }}>Sentiment</div>
    </Wrapper>
  );
};

export default Analysis;
