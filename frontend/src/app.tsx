//import { Router } from "@solidjs/router";
//import "./app.css";
import { createSignal } from "solid-js";

export default function App() {

  const [rawText, setRawText] = createSignal<string>("")

  return (
    <div class="main">
      <div class="text">Hello World</div>
      <input
        type="text"
        onInput={(e: InputEvent & { target: HTMLInputElement }) => setRawText(e.target.value)}
        placeholder="Raw Text"
        />
    </div>
  );
}
