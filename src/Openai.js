
import {GoogleGenerativeAI} from "@google/generative-ai";
  
  // const apiKey = "AIzaSyDtYPc1UfnrwpkDKrKGsDMO6uvtJTslfhg";
  const apiKey = "AIzaSyAg5No0WKjRM2kXZ3Uzpb3fmsM5XZqV0hg";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-002",
  });
  
  const generationConfig = {
    temperature: 0.9,
    topP: 0.95,
    topK: 1,
    maxOutputTokens: 2048
  };
  
  export async function runChat(prompt,his) {
    const chatSession = model.startChat({
      generationConfig,
      history: [...his
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return(result.response.text())
  }


//{
//     "role": "model",
//     "parts": [
//         {
//             "text": "Good to know!  Is there anything you'd like to ask or talk about regarding Palaniswami or the CSE department?\n"
//         }
//     ]
// }