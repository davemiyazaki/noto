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
    <div class={Sss.frequencySection}>
      <span>KEY VOCABULARY</span>
      <For each={Object.entries(props.words)}>
      {([key, value]) => (
        <div class={Sss.frequencyElement} style={{"margin-right":"8px","margin-bottom":"8px", display:"flex", "flex-direction":"row", "justify-content":"space-between", "align-items":"center",width:"250px" ,"max-width":"250px"}}>
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
      <div class={Sss.analyzedText}>
        <For
          each={props.text}>
          {(item) => (<span class={Sss.textItem}>{item}</span>)}
        </For>
      </div>
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
        >{"旅行の計画を立てるときは、行きたい場所を全部詰め込むよりも、予定に少し余裕を持たせたほうが、現地で予想外の出来事が起きても楽しめる。"}</textarea>
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
