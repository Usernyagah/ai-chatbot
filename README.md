# AI Chatbot

A simple AI-powered chatbot web app using Node.js, Express, and OpenAI's GPT API.

## Features

- Chat interface in the browser
- Uses OpenAI GPT-3.5-turbo for responses
- Easy to run locally

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- An OpenAI API key

## Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/Usernyagah/ai-chatbot
   cd ai-chatbot
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Configure environment variables**

   - Copy your OpenAI API key into a `.env` file in the project root:

     ```
     OPENAI_API_KEY=your-openai-api-key
     ```

4. **Start the server**

   ```sh
   npm start
   ```

5. **Open the chat interface**

   - Visit [http://localhost:3000/chat.html](http://localhost:3000/chat.html) in your browser.

## Usage

- Type your message in the input box and press Enter.
- The chatbot will reply using OpenAI's GPT model.

## Embedding the Chatbot

- You can use the `public/chatbot.js` script to add a floating chat bubble to your site.
- Update the `iframe.src` in `chatbot.js` to point to your deployed `chat.html`.

## Project Structure

- `server.js` - Express server and OpenAI integration
- `public/chat.html` - Chat UI
- `public/chatbot.js` - Embeddable chat bubble script
- `.env` - Environment variables (not committed)
- `package.json` - Project metadata and dependencies

## License

ISC
