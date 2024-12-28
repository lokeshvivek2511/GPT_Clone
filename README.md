**Chat GPT Clone**

This project is a Chat GPT clone built using React and Vite, with integration for OpenAI and Google Generative AI APIs. It features a chat interface where users can interact with an AI model, save chat history, and explore various functionalities within an intuitive and responsive UI.

Table of Contents

Features

Getting Started

Prerequisites

Installation

Running the Application

Project Structure

Technologies Used

License

Features

Dynamic Chat Interface: Real-time chat with an AI model that supports markdown and emojis.

Side Panel: View chat history and create new chats.

API Key Management: Automatically switches between multiple API keys in case of errors or overload.

Customizable Prompts: Includes preset prompts for quick interaction.

Responsive Design: Optimized for various screen sizes.

Dark Theme: A visually appealing UI with a dark theme for better readability.

Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (v16 or later)

npm or yarn

A valid API key for Google Generative AI

Installation

Clone the repository:

git clone https://github.com/your-username/chat-gpt-clone.git
cd chat-gpt-clone

Install dependencies:

npm install

Running the Application

Start the development server:

npm run dev

Open your browser and navigate to http://localhost:5173.

Add your API keys in src/App.jsx under the api array:

const api = [
  "YOUR_API_KEY_1",
  "YOUR_API_KEY_2",
  "YOUR_API_KEY_3"
];

Begin chatting with the AI!

Project Structure

.
├── public
├── src
│   ├── assets         # Images and icons
│   ├── components     # Reusable components
│   ├── App.jsx        # Main application logic
│   ├── Openai.js      # API integration
│   ├── index.css      # Global styles
│   ├── main.jsx       # Entry point
├── .eslintrc.js       # ESLint configuration
├── vite.config.js     # Vite configuration
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation

Technologies Used

Frontend

React: A JavaScript library for building user interfaces.

Vite: A fast build tool for modern web projects.

Backend / API Integration

Google Generative AI: Used for handling AI responses.

OpenAI API: Integrated for advanced chat functionalities.

Styling

CSS: Responsive and dark-themed design.

Poppins Font: Google Fonts for a modern look.
