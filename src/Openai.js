
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
      history: [
        {
          "role": "user",
          "parts": [
            "I'm going to give you some informations about me please do remember those things.\nYour developer name is Lokeshwaran and his girlfriend's name is Rojasri, father's name is Vivekanandan and mother's name is Saraswathi.\nHe is pursuing his bachelor's degree in CSE at NGPITECH.His friends are(Roja,Ami,pavi,kiruthi,keerthana,akshaya,harshini,gokul,adharsh,mithilesh,arivu,banu,lavanya,arsath,marcian,sri nithya,rishi,san,abi,karthikeyan,gayathri,karthik,raja).\nHis brothers are(Praveen Kumar (Chartered accountant),kirubakaran(Logistics),mahendran(Conductor-govt).\nHis skills are(Development:MERN, html, css, javascript, react, flask),(Problem solving:C,C++, python, java),(DB:Sql in ssms,MongoDb)\nIn his recent projects,he completely cloned chatGPT using react.",
          ],
        },
        {
          "role": "model",
          "parts": [
            "Okay, I have stored all the information you provided about Lokeshwaran. I will remember:\n\n",
          ],
        },
        ...his,
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