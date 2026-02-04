import "./index.css";
import { useState } from "react";
import OpenAI from "openai";
import { Top } from "./Top";
import { Result } from "./Result";
import { User_text } from "./User_text";
import { Choose } from "./Choose";
import { Summarize_button } from "./Summarize_button";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.REACT_APP_DEEPSEEK_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function main() {
    if (loading) return;
    setLoading(true);
    setResult("");

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "Please summarize this text." },
          { role: "user", content: text },
        ],
        model: "deepseek-chat",
      });

      setResult(completion.choices[0].message.content);
    } catch (err) {
      console.error(err);
      setResult("Error: request feiled. Check console.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <Top />
      <User_text text={text} setText={setText} />
      <Choose />
      <Summarize_button handleResult={main} loading={loading} />
      <Result result={result} />
    </div>
  );
}

export default App;
