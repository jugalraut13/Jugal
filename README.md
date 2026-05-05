Local LLM Chat Application
A complete local AI chat application built with React, Node.js, and Ollama.
Features
Modern UI: Dark mode, glassmorphic design.
Task Types: Standard Chat, QA, Test Case Generation, and Defect Reports.
Privacy: Everything runs locally. No data leaves your machine.
Prerequisites
Ollama must be installed and running.
Ensure you have the llama3 model downloaded:
Setup Instructions
1. Start Ollama
Ensure the Ollama server is running (default port 11434).
2. Run the Backend
Open a terminal in llm-chat-app/backend.
Install dependencies (if not already done):
Start the server:
The backend will run on http://localhost:5000.
3. Run the Frontend
Open a new terminal in llm-chat-app/frontend.
Install dependencies:
Start the React dev server:
The frontend will typically run on http://localhost:5173.
Usage
Select a Task Type from the dropdown to use specialized prompt templates.
Type your message and press Enter or click Send.
The AI responses are streamed (if configured) or returned in full from your local Ollama instance.
Troubleshooting
Connection Error: Ensure the backend is running on port 5000 and Ollama is running on port 11434.
Model Not Found: If you use a different model, update the .env file in the backend folder.
npm run dev
 
npm install
 
node server.js
 
npm install
 
ollama run llama3
