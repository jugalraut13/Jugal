const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('New Backend is running on port 3005'));

app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        console.log("Received prompt:", message);
        const prompt = `Act as QA Engineer. Keep answer short.\n\nUser: ${message}`;
        
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'phi3',
                prompt: prompt,
                stream: false
            })
        });

        if (!response.ok) {
            return res.status(500).json({ reply: 'Error: Ollama returned an error.' });
        }

        const data = await response.json();
        console.log("Ollama response successful.");
        res.json({ reply: data.response });
    } catch (error) {
        console.error("Error communicating with Ollama:", error);
        res.status(500).json({ reply: 'Error: Failed to communicate with Ollama. Make sure Ollama is running and phi3 model is pulled.' });
    }
});

app.listen(3005, () => console.log('✅ New Backend running on http://localhost:3005'));
