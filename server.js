
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.static("public"));
app.use(bodyParser.json());

app.post("/ask", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }]
    });

    const reply = chatCompletion.choices[0].message.content.trim();
    res.json({ reply });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({ reply: "Oops, something went wrong." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

