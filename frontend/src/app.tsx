import { createSignal, For, Show, Setter} from "solid-js";
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
          <div style={{"margin-bottom":"8px", display:"flex", "flex-direction":"row", "justify-content":"space-between", "align-items":"center",width:"250px" ,"max-width":"250px"}}>
            <div class={Sss.wordBox}>{key}</div>
            <div class={Sss.countBox}>{value}</div>
        </div>
        )
      }
      </For>
  </div>)
}

function ComponentA(props: {
  text: string[];
  frequencyList: Record<string, number>;
  goBack: () => void;

}) {
  for (let i = 0; i < props.text.length; i++) {
    console.log(props.text[i]);
  }

  return (
    <div>
      <For
        each={props.text}>
        {(item) => (<span class={Sss.textItem}>{item}</span>)}
      </For>
      <ItemList
        words={props.frequencyList}
      />
      <button onClick={props.goBack}>Clear</button>
    </div>
  )
}


export default function App() {

  let inputRef!: HTMLTextAreaElement;
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
    <div
      class={Sss.mainDiv}
    >
      <div class="text">Enter Japanese text</div>
      <div class={Sss.userInput}>
        <textarea
          class={Sss.inputField}
          ref={inputRef}
          autocomplete="off"
        >{"空が好きだ"}</textarea>
      </div>
        <button onClick={sendText}>Submit</button>
      <Show when={triggerAnalyzedText() === true}>
        <ComponentA
          text={serverResponse()!.tokenizedText}
          frequencyList={serverResponse()!.frequencyAnalysis}
          goBack={() => setTriggerAnalyzedText(false)}
        />
      </Show>
    </div>
  );
}
