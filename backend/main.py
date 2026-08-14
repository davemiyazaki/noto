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


class Request(BaseModel):
    var:str

class Response(BaseModel):
    detail:str
    var: str



@app.post("/echo", response_model=Response)
async def count_words(raw_text:Request):
    rawText = raw_text.var
    array_words = rawText.split()
    return{"detail":"", "var":f"{len(array_words)}"}
