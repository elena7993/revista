import {
  faCalendar,
  faEye,
  faFaceSmile,
  faLightbulb,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  max-width: 372px;
  height: 100vh;
  min-height: 812px;
  padding: 0 ${mainStyle.Padding_main};
  background-color: #002949;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  padding: 50px ${mainStyle.Padding_main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    text-align: center;
    flex: 1;
  }
`;

const AboutDream = styled.div`
  all: unset;
  width: 100%;
  height: 289px;
  textarea {
    width: 100%;
    height: 289px;
    padding: 15px;
    border: 2px solid #00b9c6;
    border-radius: 10px;
    background-color: rgba(0, 185, 198, 0.18);
    color: #fff;
    font-size: 16px;
    resize: none; /* 크기 조정 막기 */
  }
`;

const EmotionBox = styled.div`
  .text {
    line-height: 30px;
  }

  .emoji {
    width: 130px;
    height: 30px;
    background-color: rgba(0, 185, 198, 0.18);
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
  margin-top: 70px;
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

  const handleEmotionClick = (type, value) => {
    setEmotions((prev) => ({
      ...prev,
      [type]: value,
    }));
    console.log(`${type} selected:`, value);
  };

  const handleChange = (e) => {
    setDream(e.target.value);
  };

  // const handleEmojiClick = (value) => {
  //   setSelectedEmoji(value);
  // };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/analysis");
  };

  return (
    <Wrap>
      <Header>
        <FontAwesomeIcon
          icon={faAngleLeft}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <h3>Enter Dream</h3>
      </Header>
      <div style={{ marginBottom: "8px" }}>
        <FontAwesomeIcon icon={faCalendar} />
        <span>11/26/2024</span>
      </div>

      <AboutDream>
        <textarea
          value={dream}
          onChange={handleChange}
          placeholder="Describe Your Dream..."
        ></textarea>
      </AboutDream>
      <EmotionBox>
        {emotionData.map((emotion) => (
          <div className={emotion.type} key={emotion.type}>
            <div className="text">
              <FontAwesomeIcon icon={emotion.icon} />
              <span>{emotion.label}</span>
            </div>
            <div className="emoji">
              {emotion.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleEmotionClick(emotion.type, option.value)}
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "24px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
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
    </Wrap>
  );
};

export default EnterDream;
