// import { OpenAI } from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// export const getDreamInterpretation = async (dreamText) => {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: "당신은 한국어로 꿈을 해석하는 전문가입니다.",
//         },
//         { role: "user", content: dreamText },
//       ],
//     });

//     return response.choices[0].message.content;
//   } catch (error) {
//     console.error("API 호출 에러:", error);
//     throw new Error("꿈 해몽 데이터를 가져오는 데 실패했습니다.");
//   }
// };
