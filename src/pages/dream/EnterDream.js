import {
  faCalendar,
  faEye,
  faFaceSmile,
  faLightbulb,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import DreamBox from "../../components/DreamBox";

const EmotionBox = styled.div`
  .text {
    line-height: 30px;
  }

  .emoji {
    width: 130px;
    height: 30px;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    line-height: 30px;
    cursor: pointer;
  }

  .sleep,
  .mood {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  .clarity,
  .lucid {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const AnalysisBtn = styled.button`
  all: unset;
  width: 100%;
  height: 57px;
  background-color: #00b9c6;
  border-radius: 15px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;
`;

const emotionData = [
  {
    type: "sleep",
    icon: faMoon,
    label: "Sleep Quality",
    options: [
      { emoji: "🙂", value: "good" },
      { emoji: "😐", value: "average" },
      { emoji: "☹️", value: "bad" },
    ],
  },
  {
    type: "mood",
    icon: faFaceSmile,
    label: "Mood Rate",
    options: [
      { emoji: "🙂", value: "happy" },
      { emoji: "😐", value: "neutral" },
      { emoji: "☹️", value: "sad" },
    ],
  },
  {
    type: "clarity",
    icon: faEye,
    label: "Clarity of Dream",
    options: [
      { emoji: "👍", value: "clear" },
      { emoji: "👎", value: "unclear" },
    ],
  },
  {
    type: "lucid",
    icon: faLightbulb,
    label: "Lucid or Not",
    options: [
      { emoji: "👍", value: "lucid" },
      { emoji: "👎", value: "not lucid" },
    ],
  },
];

const EnterDream = () => {
  const [dream, setDream] = useState("");
  const [emotions, setEmotions] = useState({
    sleep: null,
    mood: null,
    clarity: null,
    lucid: null,
  });
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formatDate = today.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setCurrentDate(formatDate);
  }, []);

  const handleEmotionClick = (type, value) => {
    setEmotions((prev) => ({
      ...prev,
      [type]: value,
    }));
    console.log(`${type} selected:`, value);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if (!dream.trim()) {
      alert("Please describe your dream before proceeding!");
      return;
    }
    navigate("/analysis", { state: { dream } });
  };

  return (
    <Wrapper>
      <Header text="Enter Dream" BackBtn={() => navigate(-1)} />
      <div style={{ marginBottom: "8px" }}>
        <FontAwesomeIcon
          icon={faCalendar}
          style={{ color: "#F6DF80", width: "15px", marginRight: "5px" }}
        />
        <span style={{ fontFamily: "'Dongle', sans-serif", fontSize: "22px" }}>
          {currentDate}
        </span>
      </div>

      <DreamBox
        value={dream}
        onChange={(e) => setDream(e.target.value)}
        placeholder="Describe Your Dream..."
        isEditable={true}
      />

      <EmotionBox>
        {emotionData.map((emotion) => (
          <div className={emotion.type} key={emotion.type}>
            <div className="text">
              <FontAwesomeIcon
                icon={emotion.icon}
                style={{
                  color: "#F6DF80",
                  fontSize: "18px",
                  width: "15px",
                  marginRight: "5px",
                }}
              />
              <span>{emotion.label}</span>
            </div>
            <div className="emoji">
              {emotion.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleEmotionClick(emotion.type, option.value)}
                  style={{
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:
                      emotions[emotion.type] === option.value
                        ? "#00b9c6"
                        : "rgba(0, 185, 198, 0.18)",
                    color:
                      emotions[emotion.type] === option.value ? "#fff" : "#000",
                    borderRadius: "10px",
                    transform:
                      emotions[emotion.type] === option.value
                        ? "scale(1.1)"
                        : "scale(1)",
                    transition: "all 0.3s",
                  }}
                >
                  {option.emoji}
                </div>
              ))}
            </div>
          </div>
        ))}
      </EmotionBox>

      <AnalysisBtn onClick={handleClick}>Analysis</AnalysisBtn>
    </Wrapper>
  );
};

export default EnterDream;
