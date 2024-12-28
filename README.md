# ChatGPT Clone

This repository contains a ChatGPT Clone, developed using **React** and **Vite**, that integrates Google Generative AI for text generation. The app emulates the chat interface and functionalities of ChatGPT with features such as a conversation history, dynamic message rendering, and more. 

---

## Features

- **Real-Time Chat**: Send and receive messages with the help of AI. 
- **Dynamic History**: View and select past conversation queries in the sidebar.
- **Rich Text Formatting**: AI responses support bold, line breaks, and other styles for better readability.
- **Responsive Sidebar**: Expandable and collapsible for a clean interface.
- **Google Generative AI Integration**: Utilizes Google Generative AI (Gemini-1.5-pro-002 model) for responses.
- **Customizable Design**: Styled with CSS and supports dark mode aesthetics.
- **Error Handling**: Handles model overloading and API key changes gracefully.

---

## Demo

![image](https://github.com/user-attachments/assets/7e3ab18d-f909-4bf8-9b87-91b759e3f1d9)


---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chatgpt-clone.git
   cd chatgpt-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

---

## Configuration

### Google Generative AI Setup
1. Obtain an API key from [Google Cloud Console](https://console.cloud.google.com/).
2. Replace the placeholder keys in the `App.jsx` file with your Google API keys:
   ```javascript
   const api = ["YOUR_API_KEY_1", "YOUR_API_KEY_2", ...];
   ```
3. Make sure the model ID in `/src/Openai.js` matches your requirements:
   ```javascript
   model: "gemini-1.5-pro-002"
   ```



---

## Project Structure

```plaintext
├── src
│   ├── assets           # Static assets like images
│   ├── components       # Reusable components (if added)
│   ├── App.jsx          # Main application logic
│   ├── Openai.js        # Google Generative AI integration
│   ├── main.jsx         # Entry point for React
│   └── App.css          # Styles
├── public               # Public assets
├── README.md            # Documentation
├── package.json         # Node.js dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint rules
```

---

## Scripts

- **Start Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`

---

## Usage

1. Start a new conversation by clicking the **"New Chat"** button in the sidebar.
2. Type a query in the input field and press **Enter** or click the **Send** button.
3. View responses with enhanced formatting and continue your conversation.

---

## Known Issues

- **Model Overload**: If the Google Generative AI model is overloaded, the app automatically switches to the next API key.
- **Unimplemented Features**: Some buttons in the sidebar (e.g., Home, Saved) are placeholders for future enhancements.

---

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request with improvements or fixes.

---

## Contact

If you encounter any issues or have questions, feel free to contact:  
📧 **lokeshvlw2004@gmail.com**

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
