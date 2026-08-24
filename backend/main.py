#from sudachipy import dictionary
#dict_obj = dictionary.Dictionary()
#tokenizer_obj = dict_obj.create(fields={"surface","dictionary_form","pos"})
#raw_text ="私はせっかちでごめん、ただ話したいなの"
#listOfSomeSorts = tokenizer_obj.tokenize(raw_text)
#listOfWords = {}
#for m in listOfSomeSorts :

#    wordInstance =[m.surface(), m.dictionary_form(), m.part_of_speech()]
#    print(wordInstance)

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from backend.utils import analyzeText

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


class RequestItem(BaseModel):
    val:str

class ResponseItem(BaseModel):
    detail:str
    tokenizedText: list[str]
    frequencyAnalysis: dict[str, int]   




@app.post("/echo", response_model=ResponseItem)
async def count_words(raw_text:RequestItem):

    analysisResponse = analyzeText(raw_text.val)
    return{"detail":"Successful counting!", "tokenizedText":analysisResponse["text"], "frequenceAnalysis":analysisResponse["frequency"]}
