import { GoogleGenerativeAI } from "@google/generative-ai";

// API 키와 모델 설정
const genAI = new GoogleGenerativeAI("AIzaSyA9ZHdwWrOaxi9SU16sY_MVlsPaFjMjvQQ");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// API 호출 함수
export const generateDreamInterpretation = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("API 호출 중 오류 발생: ", error);
    throw new Error("꿈 해석에 실패했습니다.");
  }
};
