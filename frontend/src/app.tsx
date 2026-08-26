import { createSignal, For} from "solid-js";
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
      console.log(data);

    } catch (error) {

      console.error("Submission failed", error);
    }

  }


  return (
    <div class={Sss.flexCenteredContainer}>
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

      <div>Server Response: {serverResponse()?.tokenizedText}</div>

      <ItemList 
        words={
          serverResponse()?.frequencyAnalysis 
          ?? {"":0}
        }
      />
    </div>
  );
}
