import { GoogleGenerativeAI } from "@google/generative-ai";

console.log('GEMINI_PRO_API_KEY', process.env.GEMINI_PRO_API_KEY)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_PRO_API_KEY);

export const gemini = genAI.getGenerativeModel({ model: "gemini-pro" });

export const askAi = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);
}