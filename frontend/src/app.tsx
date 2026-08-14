//import { Router } from "@solidjs/router";
//import "./app.css";
import { createSignal } from "solid-js";

interface ItemResponse {
  message: string;
  data: {
    var: string;
  }
}


export default function App() {

  const [rawText, setRawText] = createSignal<string>("")
  const [serverResponse, setServerResponse] = createSignal < ItemResponse | null >(null)
  async function sendText(): Promise<void> {
    try {
      const res = await fetch("http://localhost:8000/echo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ var: rawText() }),
      });

      const data: ItemResponse = await res.json();
      setServerResponse(data);
    } catch (error) {
      console.error("Submission failed", error);
    }
  }
  return (
    <div class="main">
      <div class="text">Hello World</div>
      <input
        type="text"
        onInput={(e: InputEvent & { target: HTMLInputElement }) => setRawText(e.target.value)}
        placeholder="Raw Text"
      />
      <button onClick={sendText}>Send</button>

      <div>Response: {serverResponse() && <p>{serverResponse()?.message}</p>}</div>
    </div>
  );
}
