import { createSignal, For, Show} from "solid-js";
import * as Sss from "./style.css"
interface ItemResponse {
  detail: string;
  tokenizedText: string[];
  frequencyAnalysis: Record<string, number>;
}


type FrequencyCount = {
  words : Record<string, number>;
}

function ItemList(props: FrequencyCount){
  return(
  <div>
      <For each={Object.entries(props.words)}>
      {([key, value]) => (
        <div>
          <span>{key}</span>
          <span>{value}</span>
        </div>
        )
      }
      </For>
  </div>)
}

function ComponentA(props: { text: string[]}){
  return (
    <div>
      <For each={Object.values(props.text)}>
        {([item]) => (<span class={Sss.textItem}>{item}</span>)}
      </For>
    </div>
  )
}


export default function App() {

  let inputRef!: HTMLInputElement;
  const [rawText, setRawText] = createSignal<string>("")
  const [serverResponse, setServerResponse] = createSignal < ItemResponse | null >(null)
  const [triggerAnalyzedText, setTriggerAnalyzedText] = createSignal<boolean>(false)

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
      console.log(data);

    } catch (error) {

      console.error("Submission failed", error);
    }
    setTriggerAnalyzedText(true);
  }


  return (
    <div class={Sss.mainDiv}>
      <div class="text">Please paste/enter Japanese text</div>
      <Show when={!triggerAnalyzedText()} fallback={<ComponentA text={serverResponse()!.tokenizedText} />}>
        <div class={Sss.userInput}>
          <input
            type="text"
            name="userInput"
            ref={inputRef}
            placeholder="Raw Text"
            autocomplete="off"
            value={"空が好きだ"}
          />
          </div>
          <button onClick={sendText}>Send</button>
      </Show>
      <ItemList words={
        serverResponse()?.frequencyAnalysis
        ?? { "": 0 }
      }/>
    </div>
  );
}
