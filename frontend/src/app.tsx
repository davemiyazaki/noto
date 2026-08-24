//import { Router } from "@solidjs/router";
//import "./app.css";
import { createSignal } from "solid-js";

interface ItemResponse {
  detail: string,
  tokenizedText: string
  frequencyAnalysis: string
}


export default function App() {

  let inputRef!: HTMLInputElement;
  const [rawText, setRawText] = createSignal<string>("")
  const [serverResponse, setServerResponse] = createSignal < ItemResponse | null >(null)

  async function sendText(): Promise<void> {
    setRawText(inputRef.value);
    try {

      const res = await fetch("http://localhost:8000/echo/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ val: rawText() }),

      });

      const data: ItemResponse = await res.json();
      setServerResponse(data);

    } catch (error) {

      console.error("Submission failed", error);
    }

  }

  return (
    <div class="main">
      <div class="text">Please paste/enter Japanese text</div>

      <input
        type="text"
        ref={inputRef}
//        onInput={(e: InputEvent & { target: HTMLInputElement }) => setRawText(e.target.value)}
        placeholder="Raw Text"
        autocomplete="off"
        value={"空が好きだ"}
      />

      <button onClick={sendText}>Send</button>

      <div>Word Amount: {serverResponse()?.val}</div>

    </div>
  );
}
