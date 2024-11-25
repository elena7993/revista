import React, { useState } from "react";
import { generateDreamInterpretation } from "../../api";

function EnterDream() {
  const [dream, setDream] = useState("");
  const [interpretation, setInterpretation] = useState("");

  const handleInterpretation = async () => {
    if (dream.trim() === "") {
      alert("꿈 내용을 입력해주세요!");
      return;
    }

    try {
      const result = await generateDreamInterpretation(dream);
      setInterpretation(result); // API 결과 적용
    } catch (error) {
      console.error("Error interpreting dream:", error);
      alert("꿈 해석 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <h1>꿈 입력하기</h1>
      <textarea
        value={dream}
        onChange={(e) => setDream(e.target.value)}
        placeholder="꿈을 입력하세요..."
      />
      <button onClick={handleInterpretation}>꿈 해석하기</button>
      {interpretation && (
        <div>
          <h2>해석 결과:</h2>
          <p>{interpretation}</p>
        </div>
      )}
    </div>
  );
}

export default EnterDream;
